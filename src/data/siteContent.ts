import type { IconName } from "../components/Icon";
export type PersonaId = "government" | "industry" | "community" | "explorer";

export type ServiceCategory = "carbon" | "energy" | "consultancy" | "operations";

export interface Persona {
  id: PersonaId;
  label: string;
  icon: IconName;
  headline: string;
  pitch: string;
  cta: string;
}

export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  category: ServiceCategory;
  icon: IconName;
  points: string[];
  personas: PersonaId[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ServiceCategory;
  status: "Completed" | "Ongoing";
  summary: string;
  metrics?: { value: string; label: string }[];
  palette: [string, string];
  icon: IconName;
  image?: string;
}

export interface ApproachStep {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
  icon: IconName;
}

export const brand = {
  name: "Bibsikha",
  legalName: "Bibsikha LLP",
  tagline: "A Climate Change Mitigation and Advisory Group",
  chairman: {
    name: "Bibek Bora",
    photo: "/images/bibek_borah.jpeg",
  },
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Bibsikha" },
  { to: "/services", label: "Our Services" },
  { to: "/projects", label: "Projects" },
  { to: "/approach", label: "Our Approach" },
  { to: "/contact", label: "Contact Us" },
];

export const contactInfo = {
  email: "info@bibsikha.in",
  website: "www.bibsikha.in",
  addressLines: ["Khongia Gaon,", "Near Borkhongia High School,", "Jorhat - 785616 (Assam)"],
  address: "Khongia Gaon, Near Borkhongia High School, Jorhat - 785616 (Assam)",
};

export const businessQuestions = [
  "How to grow your business by being climate-conscious?",
  "How to explore newer opportunities amidst challenges?",
  "How to know where to invest?",
  "How to gain more through strategised efforts in less time?",
];

export const personas: Persona[] = [
  {
    id: "explorer",
    label: "Just exploring",
    icon: "compass",
    headline: "Climate consciousness is the new business currency.",
    pitch:
      "Bibsikha is a climate change mitigation and advisory group. We give you the solutions, the framework and the manpower to grow your business manifold — while protecting the planet.",
    cta: "Explore our work",
  },
  {
    id: "government",
    label: "Government / PSU",
    icon: "shield",
    headline: "Large-scale environmental programmes, delivered on ground.",
    pitch:
      "Consultancy for every environmental programme, distribution-based solutions and 350–600 project personnel to execute large-scale public programmes across India.",
    cta: "See our achievements",
  },
  {
    id: "industry",
    label: "Industry / Business",
    icon: "chart",
    headline: "Turn carbon credits into great business returns.",
    pitch:
      "The global carbon credit market is around $300 billion a year and set to double. We help you identify your strengths and earn from Carbon Trading and the Voluntary Carbon Market.",
    cta: "Talk to a carbon expert",
  },
  {
    id: "community",
    label: "NGO / Community",
    icon: "users",
    headline: "Cleaner kitchens, brighter homes, stronger communities.",
    pitch:
      "Smokeless cook stoves, solar lanterns and clean-energy solutions that have already reached more than 3,00,000 rural households.",
    cta: "Partner with us",
  },
];

export const categoryLabels: Record<ServiceCategory, string> = {
  carbon: "Carbon & SDG",
  energy: "Clean Energy",
  consultancy: "Consultancy",
  operations: "Manpower & Logistics",
};

export const serviceCategories: { id: ServiceCategory | "all"; label: string }[] = [
  { id: "all", label: "All services" },
  { id: "carbon", label: categoryLabels.carbon },
  { id: "energy", label: categoryLabels.energy },
  { id: "consultancy", label: categoryLabels.consultancy },
  { id: "operations", label: categoryLabels.operations },
];

export const services: Service[] = [
  {
    id: "carbon-market",
    title: "Environment, SDG & Voluntary Carbon Market Management",
    short: "Carbon credit management and tailor-made climate & sustainability solutions.",
    description:
      "As an Environment & Sustainability Consulting Company, we execute tailor-made solutions for private and public sector clients to achieve Climate Change and Sustainability objectives — including Carbon Credit Management in the Voluntary Carbon Market.",
    category: "carbon",
    icon: "coins",
    points: ["Carbon credit management & trading", "Carbon neutrality & emissions", "Green investments", "Project development"],
    personas: ["industry", "government"],
  },
  {
    id: "renewable",
    title: "Renewable Energy Sources Management",
    short: "Expand your territory and business in renewable energy.",
    description:
      "We assist clients to expand their territory and business in renewable energy sources with robust teamwork, delivering projects with a range of power trading products primarily based on solar energy.",
    category: "energy",
    icon: "sun",
    points: ["Solar-based power trading products", "Green energy projects", "Energy efficient lighting solutions", "Business expansion support"],
    personas: ["industry", "community"],
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    short: "Consultancy for every environmental programme.",
    description:
      "We provide consultancy services for every possible environmental programme and distribution-based solutions for Governmental as well as non-Governmental undertakings.",
    category: "consultancy",
    icon: "search",
    points: ["Environmental programme design", "Distribution-based solutions", "Government undertakings", "Non-Governmental undertakings"],
    personas: ["government", "community", "industry"],
  },
  {
    id: "manpower",
    title: "Human Resource Management Services",
    short: "Skilled manpower to execute large-scale programmes.",
    description:
      "One of the first companies of its kind from Northeast India, skilled manpower is our main strength. We provide and manage the large workforce our clients need — between 350 and 600 project-based employees at any time.",
    category: "operations",
    icon: "users",
    points: ["350–600 project-based employees", "Large-scale programme execution", "Workforce management", "Field-trained teams"],
    personas: ["government", "industry"],
  },
  {
    id: "logistics",
    title: "Supply Chain Logistics Management",
    short: "Distribution of materials, manpower and clean-energy products.",
    description:
      "We propel our clients’ business through the distribution and allocation of materials and manpower, including clean-energy appliances and other products of environmental importance.",
    category: "operations",
    icon: "truck",
    points: ["Smokeless cook stoves", "Solar lanterns", "Solar street lights", "Material & manpower allocation"],
    personas: ["community", "government"],
  },
];

export const coreCompetencies = [
  "Nature Based Solutions",
  "Energy Efficient Lighting",
  "Clean Cooking Solutions",
  "Waste Management",
  "Water Management",
  "Green Energy",
  "Carbon Neutrality",
  "Green Investments",
  "Carbon Emissions",
  "Project Development",
];

export const regions = ["Assam & North-eastern India", "Bihar", "Chhattisgarh", "Jharkhand"];

export const projects: Project[] = [
  {
    id: "clean-cooking",
    title: "Clean Energy Cooking Programme",
    location: "Assam, Bihar, Chhattisgarh, Jharkhand",
    category: "energy",
    status: "Ongoing",
    summary:
      "Energy-efficient, smokeless cook stoves introduced to 3 lakh rural households — reducing indoor air pollution that harms both health and the environment.",
    metrics: [
      { value: "3,00,000", label: "Households reached" },
      { value: "1,00,000", label: "Next-quarter target" },
    ],
    palette: ["#0f5132", "#2fa36f"],
    icon: "flame",
  },
  {
    id: "carbon-credits",
    title: "Carbon Credit Management",
    location: "Pan-India",
    category: "carbon",
    status: "Ongoing",
    summary:
      "Helping organisations identify their strengths and earn returns through Carbon Trading and the Voluntary Carbon Market.",
    palette: ["#b8860b", "#d4a017"],
    icon: "coins",
  },
  {
    id: "solar-lighting",
    title: "Solar Lanterns & Street Lights",
    location: "Rural India",
    category: "energy",
    status: "Ongoing",
    summary: "Distribution of solar lanterns, solar street lights and energy efficient lighting solutions to rural communities.",
    palette: ["#13294b", "#1f4b8f"],
    icon: "sun",
  },
  {
    id: "solar-power",
    title: "Solar Power Trading Products",
    location: "India",
    category: "energy",
    status: "Ongoing",
    summary: "Projects delivered with a range of power trading products primarily based on solar energy.",
    palette: ["#0b3d2e", "#146c43"],
    icon: "lightbulb",
  },
  {
    id: "programme-manpower",
    title: "Large-scale Programme Manpower",
    location: "Multiple states",
    category: "operations",
    status: "Ongoing",
    summary: "Providing and managing the skilled field workforce that clients need to execute large-scale programmes.",
    metrics: [
      { value: "350–600", label: "Project personnel" },
      { value: "10+", label: "Years of field work" },
    ],
    palette: ["#146c43", "#5bbf8a"],
    icon: "users",
  },
  {
    id: "nature-based",
    title: "Nature Based Solutions",
    location: "North-east India",
    category: "carbon",
    status: "Ongoing",
    summary: "Natural resource conservation, waste and water management programmes that support ecosystems and communities.",
    palette: ["#0f5132", "#b8860b"],
    icon: "leaf",
  },
];

export const approachSteps: ApproachStep[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand the Context",
    description:
      "We explore the socio-economic context of every client and region, drawing on more than 10 years of field knowledge across India and the North-east.",
    points: ["Socio-economic assessment", "Indian & North-east market insight", "Climate challenges & opportunities"],
    icon: "search",
  },
  {
    id: "identify",
    number: "02",
    title: "Identify Strengths",
    description:
      "We help organisations identify their strengths and what they can deliver through a range of options and solutions in the field of Carbon Trading.",
    points: ["Strength & opportunity mapping", "Carbon trading options", "Investment priorities"],
    icon: "target",
  },
  {
    id: "strategise",
    number: "03",
    title: "Strategise & Frame",
    description:
      "Our core team designs effective strategies and frameworks so clients gain more through strategised efforts in less time.",
    points: ["Tailor-made strategies", "Execution frameworks", "Fruitful project outcomes"],
    icon: "layers",
  },
  {
    id: "execute",
    number: "04",
    title: "Execute with Manpower",
    description:
      "With 350–600 project personnel and our own supply chain, we bring speedy and effective implementation of projects on the ground.",
    points: ["Skilled field workforce", "Supply chain & distribution", "Speedy implementation"],
    icon: "users",
  },
  {
    id: "grow",
    number: "05",
    title: "Grow Manifold",
    description:
      "Projects that yield more and better results — now and in the future — turning climate consciousness into returns for business and impact for communities.",
    points: ["Carbon credit returns", "Sustainable growth", "Lasting community impact"],
    icon: "chart",
  },
];

export const impactStats = [
  { value: 3, suffix: " Lakh+", label: "Rural households impacted" },
  { value: 10, suffix: "+", label: "Years of field expertise" },
  { value: 600, suffix: "", label: "Project personnel (up to)" },
  { value: 4, suffix: "+", label: "States of operation" },
];

export const dimensions: { title: string; description: string; icon: IconName }[] = [
  { title: "Energy", description: "Clean cooking, energy efficient lighting and solar-based green energy.", icon: "sun" },
  { title: "Environment", description: "Climate change mitigation, carbon neutrality, waste and water management.", icon: "globe" },
  { title: "Ecosystem", description: "Natural resource conservation and nature based solutions.", icon: "leaf" },
];

export const strengths: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Field exposure",
    description:
      "With our ground knowledge, we help translate clients’ imagination into reality by creating projects that yield more and better results, now and in the future.",
    icon: "pin",
  },
  {
    title: "Manpower",
    description:
      "Our vast manpower brings speedy and effective implementation. We are one of the most sought-after Distribution Agencies in India for carbon-reducing products.",
    icon: "users",
  },
];

export const teamExpertise: { title: string; icon: IconName }[] = [
  { title: "Livelihood Management", icon: "briefcase" },
  { title: "Women Empowerment", icon: "heart" },
  { title: "Education & Technology Development", icon: "cpu" },
  { title: "Cultural & Research-Oriented Programs", icon: "award" },
  { title: "Carbon Credit Trading", icon: "coins" },
];

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo: string;
  roles: string[];
  intro: string[];
  sections: { title: string; paragraphs?: string[]; items?: string[] }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "bibek-bora",
    name: "Mr. Bibek Bora",
    position: "Chief Executive Officer (CEO)",
    photo: "/images/bibek_borah.jpeg",
    roles: ["Chief Executive Officer | BIBSIKHA LLP", "Social Entrepreneur", "Climate & Sustainability Professional"],
    intro: [
      "Bibek Bora is a social entrepreneur and development professional with over 12 years of experience in grassroots development, environmental sustainability, climate change initiatives and community-based programmes. As the Chief Executive Officer of BIBSIKHA LLP, he leads initiatives focused on climate change mitigation, natural resource conservation, climate finance and sustainable development.",
      "With extensive experience in designing and implementing community-driven programmes, his areas of expertise include Nature-Based Solutions (NbS), carbon project development, carbon market management, clean energy, sustainable livelihoods and environmental conservation.",
      "He is committed to bridging the gap between climate solutions and grassroots implementation by connecting communities, institutions and development partners to create measurable environmental and socio-economic impact.",
      "With a vision for sustainable and inclusive development, Bibek continues to work towards innovative climate solutions that protect the environment, promote responsible resource management and contribute to a greener future.",
    ],
    sections: [
      {
        title: "Awards & Recognition",
        items: [
          "The Best Grass Root Model Award (2021) – Social Entrepreneurship Category, presented at the India International Science Festival, Goa.",
          "Green Enterprise of the Year (2022) – Awarded to BIBSIKHA LLP by News18 Assam.",
          "Xomaj Hitoxoi Award (2025) – Recognised by Sahitya Sanskriti Sadhana Moncho, Golaghat, Assam.",
        ],
      },
    ],
  },
  {
    id: "sikhamoni-bora",
    name: "Dr. Sikhamoni Bora",
    position: "Designated Partner",
    photo: "/images/sikha.jpeg",
    roles: [
      "Researcher",
      "Forestry & Agroforestry Specialist",
      "Plant Pathology",
      "Sustainable Livelihood & Development",
    ],
    intro: [
      "Dr. Sikhamoni Bora is a researcher with academic expertise in Botany, Forestry, Agroforestry, and Plant Pathology, with a strong professional background in ecological research, sustainable plantation practices, and community-based livelihood development. She has successfully completed her Ph.D. research at the Forest Research Institute (FRI), Dehradun, under FRI University, focusing on Aquilaria malaccensis—an economically important plant species widely recognised for its aromatic, medicinal, and agroforestry potential. She holds a Master of Science (M.Sc.) degree in Botany from Cotton University, Assam.",
    ],
    sections: [
      {
        title: "Research and Professional Experience",
        paragraphs: [
          "Dr. Bora has contributed to several research and development projects under the Indian Council of Forestry Research and Education (ICFRE) and the Ministry of Environment, Forest and Climate Change (MoEFCC) at the Rain Forest Research Institute (RFRI), Jorhat.",
          "Her professional experience includes working on plantation development programmes, field surveys, and monitoring activities related to forestry and agroforestry across various districts of Northeast India. She has been actively involved in assessing pest and disease incidence in plantation sites, evaluating the physicochemical and biological properties of soil, and supporting research on sustainable forest management practices.",
          "Her research experience also includes the isolation, purification, and identification of fungal species, along with the development of artificial inoculants for agarwood induction. She has practical knowledge of various plant pathology techniques and has contributed to scientific documentation, project reports, and research-based activities.",
        ],
      },
      {
        title: "Research Publications and Academic Contributions",
        paragraphs: [
          "Dr. Bora has participated in several national and international seminars, workshops, and academic programmes organised by reputed government institutions and research organisations. She has presented her research findings at more than four national and international seminars.",
          "Her academic contributions include five published research abstracts, one full-length research paper, one book chapter, and an article published through a reputed journal and publishing house.",
        ],
      },
      {
        title: "Entrepreneurship and Institutional Engagement",
        paragraphs: [
          "Dr. Sikhamoni Bora is also a Designated Partner of BIBSIKHA LLP, an organisation engaged in livelihood management, women's empowerment, education, technology development, cultural initiatives, research-oriented programmes, and carbon management.",
          "Through her association with BIBSIKHA LLP, she contributes her scientific knowledge, research experience, and practical understanding of forestry and agroforestry to initiatives that connect environmental sustainability with community development and economic opportunities.",
          "Her professional vision centres on promoting scientific research, sustainable natural resource management, women's participation, and livelihood opportunities while strengthening the relationship between environmental conservation and inclusive development.",
        ],
      },
    ],
  },
];

export const cookingFacts = [
  { value: "400M", label: "People in India exposed to indoor air pollution from biomass firewood" },
  { value: "90%", label: "Of those exposed are women" },
  { value: "5–8 hrs", label: "Spent by women on cooking every day, 20% of it collecting fuel" },
  { value: "70%", label: "Of rural households have no ventilation in their kitchen" },
];

export const faqs = [
  {
    q: "What is Carbon Credit Management?",
    a: "Carbon credits reward verified reductions in emissions. We help companies identify their strengths and participate in Carbon Trading and the Voluntary Carbon Market — a global market of around $300 billion a year that is set to double.",
  },
  {
    q: "Where does Bibsikha operate?",
    a: "We are headquartered in Jorhat, Assam, with teams on the ground in rural regions of Assam and North-eastern India, Bihar, Chhattisgarh, Jharkhand and other states.",
  },
  {
    q: "Can you provide manpower for large programmes?",
    a: "Yes. Skilled manpower is our main strength — we have between 350 and 600 project-based employees working on projects for different clients at any time.",
  },
  {
    q: "Which products do you distribute?",
    a: "We distribute clean-energy appliances and other products of environmental importance, such as smokeless cook stoves, solar lanterns and solar street lights.",
  },
];
