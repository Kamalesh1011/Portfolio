export interface Project {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  tagline: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  accentColor: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  badge: string;
  badgeColor: string;
  description: string;
  images: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
  detail: string;
}

export interface Process {
  pid: string;
  status: "active" | "queued";
  process: string;
  details: string;
}

export const projects: Project[] = [
  {
    id: "neuroforge",
    title: "NEUROFORGE",
    status: "AWARD WINNER // INTL 2026",
    statusColor: "gold",
    tagline: "Real-time thought visualization via live EEG decoding",
    description:
      "Brain-Computer Interface system decoding live EEG signals from a 6-channel Brain BioAmp Band to display images of what the user is thinking in real time. Integrates NICE-EEG encoder with CLIP ViT-L/14 embeddings for EEG-to-image alignment. Deployed on NVIDIA Jetson Nano with Arduino UNO signal pipeline for end-to-end edge inference at 250Hz.",
    stack: [
      "Python",
      "Arduino",
      "NICE-EEG",
      "CLIP",
      "Stable Diffusion",
      "Flask",
      "OpenCV",
      "Jetson Nano",
    ],
    demoUrl: "https://drive.google.com/file/d/1zBAqIA7Hwk_YrA3TbLPdMPJxF42LTSd3/view?usp=sharing",
    accentColor: "gold",
    icon: "\u{1f9e0}",
  },
  {
    id: "omniforge",
    title: "OMNIFORGE NEXUS",
    status: "LIVE",
    statusColor: "accent",
    tagline: "Low-code multi-agent AI collaboration platform for Indian MSMEs",
    description:
      "Full-stack platform enabling multi-agent AI collaboration for planning, building, testing, and optimizing applications. Scalable FastAPI microservices with Kafka, Redis, PostgreSQL for real-time orchestration. VibeCoder AI IDE for full-stack generation via natural language with SSE streaming.",
    stack: [
      "React",
      "Tailwind",
      "FastAPI",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    demoUrl: "https://omniforgenexus.vercel.app",
    accentColor: "accent",
    icon: "\u{1f52e}",
  },
  {
    id: "mindora",
    title: "MINDORA",
    status: "COMPLETED",
    statusColor: "secondary",
    tagline: "n8n-style AI workflow automation with voice control",
    description:
      'AI-driven platform transforming natural language into intelligent, executable automation workflows. Voice trigger "Hey Mindora", Google Gemini integration, drag-and-drop canvas, 10 prebuilt agent templates. Dynamic node creation with intent understanding.',
    stack: [
      "Python",
      "CrewAI",
      "TensorFlow",
      "Groq",
      "LangChain",
      "NLP",
      "React",
    ],
    demoUrl: "https://middleware-with-n8n.onrender.com",
    accentColor: "secondary",
    icon: "\u{1f9ec}",
  },
  {
    id: "quadrails",
    title: "QUADRAILS",
    status: "COMPLETED",
    statusColor: "tertiary",
    tagline: "LLM guardrails analytics and monitoring platform",
    description:
      "Full-stack guardrails analytics platform for monitoring guardrail events across LLM pipelines \u2014 safety filters, content policy violations, prompt injection detection, PII redaction tracking, hallucination flags \u2014 with real-time dashboard.",
    stack: ["React", "TypeScript", "Tailwind", "Go", "Gin", "MongoDB"],
    accentColor: "tertiary",
    icon: "\u2699\ufe0f",
  },
  {
    id: "middleware",
    title: "MIDDLEWARE AGENTIC CONVERTER",
    status: "COMPLETED",
    statusColor: "accent",
    tagline: "Convert any non-agentic AI system to full autonomy",
    description:
      "Middleware infrastructure converting non-agentic AI systems into agentic AI frameworks. Enables self-directed decision-making and task completion without requiring changes to existing solutions.",
    stack: ["Python", "CrewAI", "LangChain", "LLM APIs"],
    accentColor: "accent",
    icon: "\u{1f9e9}",
  },
  {
    id: "ewaste",
    title: "DIGITAL TWIN \u2014 E-WASTE DECONSTRUCTOR",
    status: "COMPLETED",
    statusColor: "accent",
    tagline: "Autonomous e-waste classification and digital twin monitoring",
    description:
      "Real-time e-waste classifier using YOLO detecting device types, hazardous material levels based on materials lookup table, and providing autonomous deconstruction methods. Digital twin continuously simulates and monitors the full deconstruction workflow without human intervention.",
    stack: ["Python", "YOLO", "OpenCV", "ResNet", "Digital Twin Simulation"],
    accentColor: "accent",
    icon: "\u267b\ufe0f",
  },
];

export const achievements: Achievement[] = [
  {
    id: "intl-award",
    title: "INTERNATIONAL AI AWARD \u2014 NEUROFORGE",
    event: "Best AI Awards 2026 (Honourable Mention)",
    location: "Taipei, Taiwan",
    date: "APR 2026",
    badge: "INTL",
    badgeColor: "gold",
    description: "Received global recognition for NeuroForge, a Brain-Computer Interface system that reads live EEG signals and displays what a person is thinking in real time. Competing at an international stage in Taipei, this honour highlights the project\u2019s innovation in edge AI and neurotechnology.",
    images: ["/achievements/taipei_1.jpg", "/achievements/taipei_2.jpg", "/achievements/taipei_3.jpg"],
  },
  {
    id: "national-hackathon",
    title: "NATIONAL HACKATHON WINNER",
    event: "IIT Kharagpur Alumni Assoc \u00d7 Shiv Nadar University",
    location: "Chennai, India",
    date: "JAN 2026",
    badge: "NATIONAL",
    badgeColor: "accent",
    description: "Won a prestigious national-level hackathon jointly organized by the IIT Kharagpur Alumni Association and Shiv Nadar University. Competing against teams from across India, this win reflects strong problem-solving skills and the ability to build impactful AI solutions under pressure.",
    images: ["/achievements/iit_shivanadar_1.jpg", "/achievements/iit_shivanadar_2.jpg"],
  },
  {
    id: "aim25",
    title: "WINNER \u2014 AIM'25, INFYND",
    event: "Infynd Industry-Level Hackathon",
    location: "Coimbatore, India",
    date: "OCT 2025",
    badge: "INDUSTRY",
    badgeColor: "tertiary",
    description: "Secured first place at an industry-level AI hackathon organized by Infynd. This win demonstrated the ability to deliver production-ready AI solutions that meet real-world industry standards, standing out in a highly competitive professional setting.",
    images: ["/achievements/aim_1.jpg", "/achievements/aim_2.jpg"],
  },
  {
    id: "hackbattle",
    title: "TOP 10 FINALIST \u2014 HACKBATTLE'25",
    event: "Vellore Institute of Technology",
    location: "Vellore, India",
    date: "SEP 2025",
    badge: "TOP 10",
    badgeColor: "secondary",
    description: "Selected among the top 10 teams at VIT\u2019s flagship Hackbattle competition, one of the most competitive student hackathons in South India. Reaching the finals reflects strong technical execution and innovative thinking among hundreds of participating teams.",
    images: ["/achievements/vit_1.jpg", "/achievements/vit_2.jpg"],
  },
  {
    id: "hackzilla",
    title: "FIRST PRIZE \u2014 HACKZILLA'25",
    event: "KPR Institute of Engineering and Technology",
    location: "Coimbatore, India",
    date: "SEP 2025",
    badge: "1ST PLACE",
    badgeColor: "accent",
    description: "Claimed first place at Hackzilla 2025, a competitive hackathon held at KPR Institute of Engineering and Technology. This win showcases the ability to rapidly ideate, prototype, and present AI-driven solutions effectively within tight time constraints.",
    images: ["/achievements/kpr_1.jpg", "/achievements/kpr_2.jpg"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "AI / ML",
    skills: [
      "LangGraph",
      "LangChain",
      "CrewAI",
      "TensorFlow",
      "Keras",
      "TPOT",
      "H2O.ai",
      "NICE-EEG",
      "CLIP",
    ],
  },
  {
    name: "LANGUAGES",
    skills: ["Python", "Go", "Java", "SQL"],
  },
  {
    name: "FRAMEWORKS",
    skills: [
      "FastAPI",
      "Flask",
      "React",
      "Next.js",
      "Node.js",
      "OpenCV",
    ],
  },
  {
    name: "INFRA / DEVOPS",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Kafka",
      "Redis",
      "CI/CD",
    ],
  },
  {
    name: "DATA",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "Pandas",
      "NumPy",
    ],
  },
  {
    name: "VISUALIZATION",
    skills: [
      "Power BI",
      "Tableau",
      "Plotly",
      "Matplotlib",
    ],
  },
  {
    name: "EDGE / HARDWARE",
    skills: [
      "Arduino",
      "NVIDIA Jetson Nano",
      "EEG BioAmp",
      "NI DAQ",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "Adya.ai",
    location: "Bengaluru",
    period: "May 2026 \u2013 Present",
    status: "ACTIVE",
    detail:
      "Building Vanij Platform Copilot \u2014 multi-agent autonomous coding runtime. Go, React, MongoDB, OpenRouter.",
  },
  {
    role: "B.Tech AI & Data Science",
    company: "KCE",
    location: "Coimbatore",
    period: "2023 \u2013 2027",
    status: "ONGOING",
    detail:
      "Anna University affiliate. CGPA: 8.32. Specializing in multi-agent systems, BCI, and edge AI.",
  },
];

export const processes: Process[] = [
  {
    pid: "0x001",
    status: "active",
    process: "vanij_platform_copilot",
    details: "Go monorepo autonomous coding agent runtime @ Adya.ai",
  },
  {
    pid: "0x002",
    status: "active",
    process: "openrouter_llm_connector",
    details: "Bedrock connector pattern implementation",
  },
  {
    pid: "0x003",
    status: "active",
    process: "parallel_subagent_executor",
    details: "Git worktree architecture + integration manifest",
  },
  {
    pid: "0x004",
    status: "active",
    process: "spec_documentation_gen",
    details: "45-60 markdown files w/ structured text tag conventions",
  },
  {
    pid: "0x005",
    status: "queued",
    process: "campus_ai_club_kce",
    details: "Founding initiative \u2014 Karpagam College of Engineering",
  },
  {
    pid: "0x006",
    status: "queued",
    process: "claude_ambassador_program",
    details: "Application submitted \u2014 Anthropic",
  },
];

export const socialLinks = {
  github: "https://github.com/Kamalesh1011",
  linkedin:
    "https://www.linkedin.com/in/kamaleshwaran-bm-603800299",
  email: "kamaleshwaranbmks@gmail.com",
  phone: "+91 6374789964",
};
