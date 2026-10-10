// EDIT THIS FILE to change what appears when a role is opened on the Careers page.
// NOTE: the live Lumibri site only lists these role titles. The summaries, duties and
// qualifications below are a general draft for each profession - review and adjust
// them to match what Lumibri actually requires before publishing.

export type CareerRole = {
  title: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

export const careerRoles: CareerRole[] = [
  {
    title: "Behavior Technician (BT) / Registered Behavior Technician (RBT)",
    summary:
      "Behavior Technicians work directly with children, carrying out the individualized treatment plans designed by a supervising behavior analyst. Sessions take place in the child's home and community, where new skills are practiced in everyday life.",
    responsibilities: [
      "Carry out ABA treatment plans and skill-building programs with each child",
      "Record session data accurately so the clinical team can track progress",
      "Support communication, social, play, and daily living goals",
      "Share session updates with parents and caregivers",
      "Take part in supervision and team meetings with a BCBA or BCaBA",
    ],
    qualifications: [
      "RBT credential, or willingness to complete the BACB requirements (40-hour training, competency assessment, and exam)",
      "High school diploma or equivalent",
      "Patience, reliability, and a genuine enjoyment of working with children",
      "Ability to travel to client homes and community settings",
    ],
  },
  {
    title: "Board Certified Behavior Analyst (BCBA)",
    summary:
      "BCBAs lead each child's clinical program. They assess, design individualized treatment plans, and supervise the technicians who deliver therapy, while coaching families along the way.",
    responsibilities: [
      "Conduct individualized assessments to identify strengths, needs, and goals",
      "Write and update treatment plans based on ongoing data",
      "Supervise, train, and support BTs and RBTs",
      "Provide parent and caregiver training",
      "Coordinate with families, schools, and other providers",
      "Document progress and support insurance authorization reporting",
    ],
    qualifications: [
      "BCBA certification from the Behavior Analyst Certification Board (BACB)",
      "Graduate degree that meets BACB requirements",
      "Active state licensure where required",
      "Experience supporting children with autism and developmental differences",
    ],
  },
  {
    title: "Early Intervention Specialist",
    summary:
      "Early Intervention Specialists support young children with developmental delays and their families, helping build early skills in play, communication, movement, and daily routines.",
    responsibilities: [
      "Provide play-based, family-centered developmental support",
      "Coach caregivers to use strategies during everyday routines",
      "Track progress toward early developmental goals",
      "Work with the child's clinical team and other providers",
    ],
    qualifications: [
      "Degree in early childhood, special education, or a related field",
      "Credentials or certification as required by the state",
      "Experience with infants, toddlers, and their families",
      "Comfort working in family homes",
    ],
  },
  {
    title: "Occupational Therapist (OT)",
    summary:
      "Occupational Therapists help children build the skills they need for everyday activities such as self-care, play, learning, and sensory regulation.",
    responsibilities: [
      "Evaluate fine motor, sensory, self-care, and daily living skills",
      "Develop individualized therapy goals and plans",
      "Deliver therapy through play and functional activities",
      "Teach families strategies and adaptations to use at home",
      "Coordinate with the child's ABA and other therapy team members",
    ],
    qualifications: [
      "Master's or doctoral degree in occupational therapy",
      "Active New Jersey OT license (or eligibility)",
      "NBCOT certification",
      "Pediatric experience preferred",
    ],
  },
  {
    title: "Speech-Language Pathologist (SLP)",
    summary:
      "Speech-Language Pathologists support children's communication, from speech sounds and language to social communication and alternative ways to communicate.",
    responsibilities: [
      "Assess speech, language, and social communication skills",
      "Create individualized communication goals",
      "Provide therapy in natural, familiar settings",
      "Support augmentative and alternative communication (AAC) when appropriate",
      "Train and collaborate with families and the care team",
    ],
    qualifications: [
      "Master's degree in speech-language pathology",
      "ASHA Certificate of Clinical Competence (CCC-SLP)",
      "Active New Jersey SLP license (or eligibility)",
      "Pediatric experience preferred",
    ],
  },
];