"use client";

import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import "./Lightfall.css";

type LightfallProps = {
  colors?: string[];
  backgroundColor?: string;
  speed?: number;
  streakCount?: number;
  streakWidth?: number;
  streakLength?: number;
  glow?: number;
  density?: number;
  twinkle?: number;
  zoom?: number;
  backgroundGlow?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  mouseRadius?: number;
  className?: string;
};

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;
uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform int uColorCount;
uniform vec3 uBgColor;
uniform float uSpeed;
uniform int uStreakCount;
uniform float uStreakWidth;
uniform float uStreakLength;
uniform float uGlow;
uniform float uDensity;
uniform float uTwinkle;
uniform float uZoom;
uniform float uBgGlow;
uniform float uOpacity;
uniform float uMouseStrength;
uniform float uMouseRadius;
varying vec2 vUv;

vec3 palette(float h) {
  return uColorCount > 1 ? mix(uColor0, uColor1, step(0.5, h)) : uColor0;
}

vec2 scene(vec2 frag, vec2 resolution) {
  vec2 p = (frag + frag - resolution) / resolution.x;
  float z = 0.0;
  float d = 1000.0;
  vec4 object = vec4(0.0);
  for (int i = 0; i < 32; i++) {
    if (d <= 0.0001) break;
    object = z * normalize(vec4(p, uZoom, 0.0)) - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;
    d = 1.0 - length(object);
    z += d;
  }
  return vec2(object.x, atan(object.z, object.y));
}

void main() {
  vec2 resolution = iResolution.xy;
  vec2 uv = (vUv * resolution.xy - 0.5 * resolution.xy) / resolution.x;
  vec2 cell = scene(vUv * resolution.xy, resolution);
  vec2 dx = scene(vUv * resolution.xy + vec2(1.0, 0.0), resolution) - cell;
  vec2 dy = scene(vUv * resolution.xy + vec2(0.0, 1.0), resolution) - cell;
  vec2 fw = abs(dx) + abs(dy);
  float time = 0.1 * iTime * uSpeed + 9.0;
  float rings = max(1.0, floor(6.28318 * max(uDensity, 0.05) + 0.5));
  vec2 ringSize = vec2(0.005, 6.28318 / rings);
  vec2 mouse = (iMouse + iMouse - resolution) / resolution.x;
  float mouseGlow = exp(-dot(uv - mouse, uv - mouse) / max(uMouseRadius * uMouseRadius, 0.0001)) * uMouseStrength;
  vec3 color = uBgColor * 90.0 * uBgGlow / (1000.0 * dot(uv, uv) + 6.0);

  for (int layer = 0; layer < 16; layer++) {
    if (layer >= uStreakCount) break;
    float seed = fract(sin(dot(vec2(float(layer) + 1.0, floor(cell.x / ringSize.x + 0.5)), vec2(7.0, 11.0))) * 73.0);
    vec2 streak = cell - (time + time * seed) * vec2(0.0, 1.0);
    streak -= floor(streak / ringSize + 0.5) * ringSize;
    float tail = 19.0 / max(uStreakLength, 0.05);
    vec2 inner = vec2(length(max(streak, vec2(-1.0, 0.0))), length(streak) - 0.0005 * uStreakWidth) - 0.0005 * uStreakWidth;
    vec2 smooth = vec2(1.0) - smoothstep(-fw, fw, inner);
    float flicker = mix(1.5, 1.0 + sin(time + seed * 7.0), uTwinkle);
    color += dot(smooth, vec2(exp(tail * streak.y), 3.0)) * palette(fract(seed * 8663.0)) * flicker * (1.0 + mouseGlow * 2.0);
    cell.x += ringSize.x / 8.0;
  }

  vec3 mapped = sqrt((1.0 - exp(-2.0 * max(color * uGlow - vec3(0.04, 0.08, 0.02), 0.0))) / (1.0 + exp(-2.0 * max(color * uGlow - vec3(0.04, 0.08, 0.02), 0.0))));
  gl_FragColor = vec4(mapped, uOpacity);
}
`;

function hexToRgb(hex: string) {
  const value = hex.replace("#", "").padEnd(6, "0");
  return [0, 2, 4].map((offset) => parseInt(value.slice(offset, offset + 2), 16) / 255);
}

export default function Lightfall({
  colors = ["#A6C8FF", "#5227FF", "#FF9FFC"],
  backgroundColor = "#0A29FF",
  speed = 0.5,
  streakCount = 2,
  streakWidth = 1,
  streakLength = 1,
  glow = 1,
  density = 0.6,
  twinkle = 1,
  zoom = 3,
  backgroundGlow = 0.5,
  opacity = 1,
  mouseInteraction = true,
  mouseStrength = 0.5,
  mouseRadius = 1,
  className,
}: LightfallProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio || 1, 2), alpha: true });
    const { gl } = renderer;
    const canvas = gl.canvas;
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const colorA = hexToRgb(colors[0] || "#A6C8FF");
    const colorB = hexToRgb(colors[1] || colors[0] || "#5227FF");
    const uniforms = {
      iResolution: { value: [1, 1, 1] },
      iMouse: { value: [0, 0] },
      iTime: { value: 0 },
      uColor0: { value: colorA },
      uColor1: { value: colorB },
      uColorCount: { value: Math.min(colors.length, 2) },
      uBgColor: { value: hexToRgb(backgroundColor) },
      uSpeed: { value: speed },
      uStreakCount: { value: Math.max(1, Math.min(16, Math.round(streakCount))) },
      uStreakWidth: { value: streakWidth },
      uStreakLength: { value: streakLength },
      uGlow: { value: glow },
      uDensity: { value: density },
      uTwinkle: { value: twinkle },
      uZoom: { value: zoom },
      uBgGlow: { value: backgroundGlow },
      uOpacity: { value: opacity },
      uMouseStrength: { value: mouseInteraction ? mouseStrength : 0 },
      uMouseRadius: { value: mouseRadius },
    };
    const program = new Program(gl, { vertex, fragment, uniforms });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
    let frame = 0;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height);
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];
    };
    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      uniforms.iMouse.value = [
        (event.clientX - rect.left) * (gl.drawingBufferWidth / rect.width),
        (rect.height - event.clientY + rect.top) * (gl.drawingBufferHeight / rect.height),
      ];
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    if (mouseInteraction) canvas.addEventListener("pointermove", move);
    resize();

    const render = (time: number) => {
      uniforms.iTime.value = time * 0.001;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      if (mouseInteraction) canvas.removeEventListener("pointermove", move);
      if (canvas.parentElement === container) container.removeChild(canvas);
      program.remove();
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [backgroundColor, colors, backgroundGlow, density, glow, mouseInteraction, mouseRadius, mouseStrength, opacity, speed, streakCount, streakLength, streakWidth, twinkle, zoom]);

  return <div ref={containerRef} className={`lightfall-container ${className ?? ""}`} />;
}
