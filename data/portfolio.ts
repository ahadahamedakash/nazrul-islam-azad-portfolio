// Single source of truth for all portfolio content

export const personalInfo = {
  name: "Nazrul Islam Azad",
  title: "Assistant Manager",
  company: "ACI Motors Limited",
  role: "Electrical & Electronics Engineer",
  location: "Dhaka, Bangladesh",
  email: "azad@gmail.com",
  phone: "+880 1636-888999",
  linkedin: "",
  github: "",
};

export const skills = {
  technical: [
    "Solar Energy Systems",
    "Inverter/UPS Design",
    "Electrical Panel Design",
    "Energy Auditing",
    "Project Management",
    "AutoCAD",
    "MATLAB",
    "PLC Programming",
  ],
  soft: [
    "Team Leadership",
    "Client Communication",
    "Problem Solving",
    "Technical Documentation",
    "Project Planning",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Industrial Solar Installation",
    category: "Solar Energy",
    description:
      "Designed and supervised installation of 500kW industrial solar power system for manufacturing facility, achieving 40% reduction in grid dependency.",
    technologies: ["Solar PV Design", "Inverter Systems", "Energy Storage"],
    year: "2023",
    image: "/projects/solar-industrial.jpg",
  },
  {
    id: 2,
    title: "UPS System Integration",
    category: "Power Systems",
    description:
      "Led integration of 200kVA UPS system for data center with redundant power architecture and remote monitoring capabilities.",
    technologies: ["UPS Design", "Battery Banks", "Monitoring Systems"],
    year: "2023",
    image: "/projects/ups-system.jpg",
  },
  {
    id: 3,
    title: "Energy Audit & Optimization",
    category: "Energy Management",
    description:
      "Conducted comprehensive energy audit for commercial building, identified 30% energy savings through efficiency improvements and load optimization.",
    technologies: ["Energy Analysis", "Power Quality", "Efficiency Measures"],
    year: "2022",
    image: "/projects/energy-audit.jpg",
  },
];

export const experience = [
  {
    id: 1,
    title: "Assistant Manager",
    company: "ACI Motors Limited",
    location: "Dhaka, Bangladesh",
    period: "2025 - Present",
    description:
      "Leading electrical engineering projects, managing solar installations, and overseeing power system design and implementation.",
    achievements: [
      "Managed 15+ industrial solar projects totaling 2MW capacity",
      "Reduced installation time by 25% through process optimization",
      "Led cross-functional teams of 10+ engineers and technicians",
    ],
  },
  {
    id: 2,
    title: "Senior Electrical Engineer",
    company: "ABC Engineering Ltd",
    location: "Dhaka, Bangladesh",
    period: "2023 - 2025",
    description:
      "Designed and implemented electrical systems for commercial and industrial projects.",
    achievements: [
      "Designed electrical layouts for 50+ commercial buildings",
      "Implemented power factor correction systems reducing penalties by 40%",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Electrical & Electronic Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2014 - 2018",
    gpa: "3.5/4.0",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Certified Energy Manager",
    issuer: "Bangladesh Energy Commission",
    year: "2022",
    credential: "CEM-2022-BD",
  },
  {
    id: 2,
    title: "Solar PV System Designer",
    issuer: "Institute of Engineers Bangladesh",
    year: "2021",
    credential: "SPV-2021-0547",
  },
  {
    id: 3,
    title: "Advanced PLC Programming",
    issuer: "Siemens Bangladesh",
    year: "2020",
    credential: "PLC-2020-1123",
  },
];

export const contact = {
  email: "azad@gmail.com",
  phone: "+880 1636-888999",
  address: "Dhaka, Bangladesh",
  linkedin: "",
  github: "",
  availableForFreelance: true,
};
