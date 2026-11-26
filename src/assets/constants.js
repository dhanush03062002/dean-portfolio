export const PROFILE = {
  name: "Dakshnamoorthy",
  fullName: "Hi, I'm Dakshnamoorthy",
  role: "UI/UX DESIGNER",
  location: "Chennai, India",
  fullAddress: "No3/1, 1st Street, Samiyar Thottam, Vyasarpadi, Chennai - 39",
  bio: "UI/UX Designer crafting clean, user-friendly digital experiences. I design with purpose, precision, and people in mind, from mobile apps to data-rich dashboards.",
  avatar: "https://static.wixstatic.com/media/11062b_ab5b2ad468a04347beb1eab430092c6e~mv2.jpg",
  heroBanner: "https://static.wixstatic.com/media/581991_9854fcb8ae3b4707acfabb78b2a9de74~mv2.png",
  email: "dhakashnamoorthy.03@gmail.com",
  phone: "+91 9345665442",
  consultationTime: "30-minute design consultation",
  currentCompany: "Amrithaa Private Ltd",
  experienceYears: "2+ Years",
  completedProjects: "20+ Projects",
  resumeUrl: "/Dhakashnamoorthy_Designer.pdf"
};

export function triggerResumeDownload() {
  const url = PROFILE.resumeUrl || "/Dhakashnamoorthy_Designer.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "Dhakashnamoorthy_Designer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dhakashnamoorthy", icon: "linkedin" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
  { name: "Behance", url: "https://behance.net", icon: "behance" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  { name: "X", url: "https://x.com", icon: "x" }
];

export const PROJECTS = [
  // ── UI/UX Design Projects ──
  {
    id: "factory-energy",
    title: "Factory Energy Monitoring",
    category: "IoT & Industrial Dashboard",
    categoryType: "ui-ux",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_244ac4c2707a4db19f97a12ac0c4c489~mv2.png",
    description: "Real-time industrial IoT dashboard for monitoring factory machine energy consumption, power spikes, machine health, and energy optimization metrics.",
    tags: ["UI/UX Design", "Dashboard", "IoT", "Figma"],
    liveUrl: "https://www.figma.com/proto/pA1u8hf6fl8N5gVxT1pIw1/Factory-Energy-Monitoring-Design?page-id=49%3A2854&node-id=49-2855&viewport=261%2C320%2C0.06&t=rniT55WPgp5W51zl-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=49%3A2855"
  },
  {
    id: "ai-business",
    title: "AI Business Development",
    category: "Enterprise AI Platform",
    categoryType: "ui-ux",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_3a189551d3fd49b895c8bdaa1857f95d~mv2.png",
    description: "AI-driven corporate intelligence dashboard that transforms raw organizational metrics into predictive insights and automated strategic workflows.",
    tags: ["Product Design", "AI / SaaS", "Dashboard", "Analytics"],
    liveUrl: "https://www.figma.com/proto/I0HWZ1952y1ApQXkKMBbB6/Minsky-Design--Figma?page-id=0%3A1&node-id=50-3701&viewport=443%2C78%2C0.09&t=2Eywmtd6H59BpJ8j-1&scaling=min-zoom&content-scaling=fixed"
  },
  {
    id: "make-shift",
    title: "Make Shift",
    category: "On-Demand Service Booking",
    categoryType: "ui-ux",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_ee2aeebfadb848239fd35ca589f1f573~mv2.png",
    description: "End-to-end mobile application for instant home and artisan service bookings with live pro tracking, calendar scheduling, and escrow payments.",
    tags: ["Mobile App", "iOS & Android", "UI/UX", "User Journey"],
    liveUrl: "https://www.figma.com/design/MLrzTUW38a3aV1v5y10Y8m/Make-Shift?node-id=0-1&t=lIKHiNMwbMfuxXsY-1"
  },
  {
    id: "bookmywage",
    title: "Bookmywage",
    category: "Fintech & Wage Management",
    categoryType: "ui-ux",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_6e7f546103414833a05096a3a9784c33~mv2.png",
    description: "Smart wage streaming and shift booking platform allowing blue-collar professionals to manage schedules, log hours, and receive instant payouts.",
    tags: ["Fintech", "Mobile App", "Prototyping", "Design System"],
    liveUrl: "https://www.figma.com/design/lDRo4ELZn6AKyqaNuqz8yl/BOOK-MY-WAGE?node-id=72-825&t=PrF52Ja7xtPMKNjE-1"
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment App",
    category: "Healthcare & Teleconsultation",
    categoryType: "ui-ux",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_cd3ac05df3fc4ca0852142be490b92a5~mv2.png",
    description: "Patient-centered healthcare application offering instant doctor discovery, appointment slots, video consultation, and digital prescriptions.",
    tags: ["Healthcare", "UX Research", "Mobile App", "Figma"],
    liveUrl: "https://www.figma.com/design/tVAC1MviZm2Fi13pVXgmOw/Doctor-appointment---Project--?node-id=0-1&t=OWbB76jPTtm7K7je-1"
  },
  {
    id: "quuts-app",
    title: "Quuts App",
    category: "Content & Social Community",
    categoryType: "ui-ux",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_4069eb9fd2ff4cb19a942246db0bbbb5~mv2.png",
    description: "Micro-content discovery app focused on quote typography, daily reflections, audio snippets, and community sharing.",
    tags: ["Mobile App", "Social", "Typography", "Interaction Design"],
    liveUrl: "https://www.figma.com/design/J7h29yN9lz6h4LfQrk18KE/QUUTS-Chatting-App?node-id=0-1&t=TiOayCmdYPL1CZje-1"
  },

  // ── Website Design Projects ──
  {
    id: "property-website",
    title: "Property Website",
    category: "Real Estate Marketplace",
    categoryType: "website",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_9b75f243b27d465ebce5701c83910525~mv2.png",
    description: "Curated luxury real estate platform designed for buying, renting, and investing in prime metropolitan locations with virtual walkthroughs.",
    tags: ["Web Design", "Real Estate", "Responsive", "UI/UX"],
    liveUrl: "https://www.homewala.com/"
  },
  {
    id: "furniture-website",
    title: "Furniture Modern Store",
    category: "Interior & E-Commerce Web",
    categoryType: "website",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_0459d753f8c942fb962ea71c31ba13e2~mv2.png",
    description: "Minimalist Scandinavian furniture showcase with 3D product previews, fabric customizers, and high-conversion checkout flows.",
    tags: ["Web Design", "E-Commerce", "Interior", "Figma"],
    liveUrl: "https://www.figma.com/design/w8Dx4PLie8Ux3eBW8IjqYo/Furniture-website?node-id=0-1&t=0d7y0keqXsRNJ04d-1"
  },
  {
    id: "goshala-website",
    title: "Goshala Community Portal",
    category: "Non-Profit & Community Platform",
    categoryType: "website",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_5164bec886a54560a6cdbbdaa0e09e84~mv2.png",
    description: "Community-driven portal with donation flows, volunteer scheduling, transparency financial logs, and cow sponsorship tiers.",
    tags: ["Web Platform", "Non-Profit", "UI/UX", "Responsive"],
    liveUrl: "https://www.figma.com/design/In88drfsewsnJ7uMzqJmPi/Goshala-website?node-id=0-1&t=BSUJ9J3A6B8QHQ4Q-1"
  },
  {
    id: "mymediater",
    title: "Mymediater Platform",
    category: "Mediation & Legal Tech",
    categoryType: "website",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_06e78859015f48bfa5d92c330c679f20~mv2.png",
    description: "Dispute resolution and online mediation platform with confidential case rooms, interactive milestone trackers, and document review.",
    tags: ["Legal Tech", "Web Platform", "UI/UX", "Product Design"],
    liveUrl: "https://www.figma.com/design/g4xf4qrryocFnDvCrVigxu/mymediator?node-id=0-1&t=SIH46NbNnfl71fcv-1"
  },

  // ── Graphic Design Projects (Accessible in grid & popup) ──
  {
    id: "party-poster",
    title: "Amrithaa Party Poster",
    category: "Event & Visual Graphics",
    categoryType: "graphic",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_380b19259f54448d9ee4afbba61b637f~mv2.png",
    description: "Dynamic typographic party poster design blending vibrant neon gradients, custom character vectors, and high-impact hierarchy.",
    tags: ["Graphic Design", "Photoshop", "Typography", "Poster Design"],
    liveUrl: "https://static.wixstatic.com/media/581991_380b19259f54448d9ee4afbba61b637f~mv2.png"
  },
  {
    id: "app-poster",
    title: "App Promotional Poster",
    category: "Marketing & Advertising Design",
    categoryType: "graphic",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_67e16292934f497e9a023d4d1a7f0e99~mv2.png",
    description: "Clean promotional print and digital advertisement poster communicating core mobile application features and launch offers.",
    tags: ["Graphic Design", "Illustrator", "Marketing", "Print"],
    liveUrl: "https://static.wixstatic.com/media/581991_67e16292934f497e9a023d4d1a7f0e99~mv2.png"
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Logo Suite",
    category: "Branding & Stationery",
    categoryType: "graphic",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_c070f233ed51470ebb6f5c903454dfcc~mv2.png",
    description: "Complete corporate brand mark identity including levitating envelope mockups, stationery design, letterheads, and palette guidelines.",
    tags: ["Branding", "Logo Design", "Stationery", "Illustrator"],
    liveUrl: "https://static.wixstatic.com/media/581991_c070f233ed51470ebb6f5c903454dfcc~mv2.png"
  },
  {
    id: "creative-billboard",
    title: "Exhibition Poster Mockup",
    category: "Outdoor Advertising",
    categoryType: "graphic",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_83e93110d8924c9f93d3493d42df51ad~mv2.png",
    description: "Realistic environmental poster display mockup featuring high-contrast geometric layout for public exhibitions and galleries.",
    tags: ["Poster Mockup", "Outdoor", "Graphic Design", "Branding"],
    liveUrl: "https://static.wixstatic.com/media/581991_83e93110d8924c9f93d3493d42df51ad~mv2.png"
  }
];

// Rich Graphic Design Gallery specifically showcased in the animated popup
export const GRAPHIC_DESIGN_WORKS = [
  {
    id: "g1",
    title: "Amrithaa Party Poster",
    subtitle: "Celebration & Event Branding",
    image: "https://static.wixstatic.com/media/581991_380b19259f54448d9ee4afbba61b637f~mv2.png",
    client: "Amrithaa Private Ltd",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    year: "2024",
    description: "High-energy festival celebration poster designed with custom 3D typography, neon accents, and balanced hierarchy for social and print distribution.",
    dimensions: "1080 × 1350 px (Instagram) & A3 Print Ready"
  },
  {
    id: "g2",
    title: "App Promotional Launch Poster",
    subtitle: "Digital Marketing Campaign",
    image: "https://static.wixstatic.com/media/581991_67e16292934f497e9a023d4d1a7f0e99~mv2.png",
    client: "App Launch Campaign",
    tools: ["Adobe Illustrator", "Photoshop"],
    year: "2024",
    description: "Editorial advertising collateral designed to drive conversions during product release phases, highlighting core value propositions and QR download access.",
    dimensions: "Print Collateral & Social Media Kit"
  },
  {
    id: "g3",
    title: "Brand Identity & Logo Mockup",
    subtitle: "Corporate Stationery & Envelopes",
    image: "https://static.wixstatic.com/media/581991_c070f233ed51470ebb6f5c903454dfcc~mv2.png",
    client: "Corporate Identity Suite",
    tools: ["Adobe Illustrator", "Photoshop 3D"],
    year: "2024",
    description: "Photorealistic levitating envelope presentation with foil-stamped logomarks, matching business cards, letterheads, and brand guidelines.",
    dimensions: "Full Stationery Mockup Suite"
  },
  {
    id: "g4",
    title: "Gallery Exhibition Poster Mockup",
    subtitle: "Outdoor & Architectural Display",
    image: "https://static.wixstatic.com/media/581991_83e93110d8924c9f93d3493d42df51ad~mv2.png",
    client: "Visual Arts Showcase",
    tools: ["Photoshop Mockup Studio"],
    year: "2024",
    description: "Urban billboard and indoor wall poster mockup illustrating realistic lighting, shadows, and architectural environmental context.",
    dimensions: "Large Format Outdoor & Indoor Display"
  }
];

export const STATS = [
  { value: "20+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "5.0", label: "Star Client Reviews" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "12+", label: "Industries Served" },
  { value: "4+", label: "Design Certifications" }
];

export const TECH_SKILLS = [
  // ── Design Tools ──
  {
    name: "Figma",
    icon: "https://framerusercontent.com/images/PhCo5zQuRG2TMfsJDGW6EwnbphM.png?width=185&height=185",
    category: "Design",
    level: "expert"
  },
  {
    name: "Adobe XD",
    icon: "https://static.wixstatic.com/media/581991_cd275506fdf54476b154a59cbe73da79~mv2.png",
    category: "Design",
    level: "expert"
  },
  {
    name: "Photoshop",
    icon: "https://static.wixstatic.com/media/581991_91e7ff798e7a4a7c8c63afd7287ffab9~mv2.png",
    category: "Design",
    level: "expert"
  },
  {
    name: "Illustrator",
    icon: "https://static.wixstatic.com/media/581991_4464bcb4a19642a8a708622023ca58b9~mv2.png",
    category: "Design",
    level: "expert"
  },
  // ── Frontend ──
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
    level: "proficient"
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
    level: "proficient"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
    level: "proficient"
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    level: "learning"
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
    level: "proficient"
  },
  // ── Programming ──
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Programming",
    level: "proficient"
  },
  {
    name: "C (Basic)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    category: "Programming",
    level: "learning"
  },
  // ── Database ──
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
    level: "proficient"
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
    level: "proficient"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
    level: "learning"
  },
  // ── Concepts ──
  {
    name: "Data Structures",
    icon: "🧩",
    category: "Concepts",
    level: "proficient"
  },
  {
    name: "OOP",
    icon: "⚙️",
    category: "Concepts",
    level: "proficient"
  },
  {
    name: "DBMS",
    icon: "🗄️",
    category: "Concepts",
    level: "proficient"
  },
  // ── Tools ──
  {
    name: "Git & GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
    level: "proficient"
  },
];

export const STACK = [
  {
    name: "Figma",
    role: "Primary UI/UX Tool",
    icon: "https://framerusercontent.com/images/PhCo5zQuRG2TMfsJDGW6EwnbphM.png?width=185&height=185",
    desc: "Component systems, interactive prototypes, user flows, responsive auto-layouts, and design libraries."
  },
  {
    name: "Adobe XD",
    role: "Prototyping & Layouts",
    icon: "https://static.wixstatic.com/media/581991_cd275506fdf54476b154a59cbe73da79~mv2.png",
    desc: "Interactive wireframes, transition prototypes, micro-interaction modeling, and UI mockups."
  },
  {
    name: "Photoshop",
    role: "Visual & Retouching",
    icon: "https://static.wixstatic.com/media/581991_91e7ff798e7a4a7c8c63afd7287ffab9~mv2.png",
    desc: "High-fidelity mockups, visual asset manipulation, marketing banners, and color grading."
  },
  {
    name: "Illustrator",
    role: "Vector & Branding",
    icon: "https://static.wixstatic.com/media/581991_4464bcb4a19642a8a708622023ca58b9~mv2.png",
    desc: "Vector icon design, brand identity systems, illustrations, typography marks, and marketing collateral."
  }
];

export const EXPERIENCE = [
  {
    role: "UI/UX Designer",
    company: "Amrithaa Private Ltd",
    period: "Nov 2023 - Present",
    location: "Chennai, India",
    description: "Full-service digital design agency based in Chennai. Leading end-to-end UI/UX design, user research, wireframing, and design systems for 20+ clients across healthcare, fintech, IoT, real estate, and e-commerce."
  },
  {
    role: "UI/UX Design Specialist",
    company: "Freelance & Consulting",
    period: "2023 - 2024",
    location: "Remote / Chennai",
    description: "Collaborated directly with founders and product teams to translate complex business requirements into intuitive web and mobile app interfaces."
  },
  {
    role: "Background & Education",
    company: "Commerce & Advanced UI/UX Certification",
    period: "Chennai",
    description: "Blended analytical strategic thinking with user-centered design principles, certified in advanced human-computer interaction, usability heuristics, and visual hierarchy."
  }
];

export const SERVICES = [
  {
    number: "01",
    title: "UI/UX DESIGN",
    tagline: "Intuitive & Engaging",
    description: "Crafting intuitive, engaging, and visually compelling interfaces for web and mobile apps. From wireframes to high-fidelity designs, I focus on usability and aesthetics to create seamless user journeys.",
    deliverables: ["User Research & Personas", "Wireframes & Information Architecture", "High-Fidelity UI Screens", "Design Systems & Token Libraries"]
  },
  {
    number: "02",
    title: "WEBSITE & APP DESIGN",
    tagline: "End-to-End Solutions",
    description: "Complete design solutions for responsive websites and mobile applications that align with your brand and business goals. Every single pixel is crafted for both beauty and function.",
    deliverables: ["Responsive Web Design", "iOS & Android Mobile Apps", "SaaS & Enterprise Dashboards", "Developer-Ready Handoff Specs"]
  },
  {
    number: "03",
    title: "GRAPHIC DESIGN & BRANDING",
    tagline: "Designs That Communicate",
    description: "From social media creatives to marketing materials and brand marks, I deliver designs that communicate your message with impact, blending creativity with consistent visual identity.",
    deliverables: ["Brand Identity & Logo Marks", "Social Media Creatives", "Marketing Posters & Pitch Decks", "Digital & Print Collateral"]
  },
  {
    number: "04",
    title: "PROTOTYPING & INTERACTION",
    tagline: "Bringing Ideas To Life",
    description: "Interactive prototypes and smooth transitions that bring static designs to life. Ideal for user testing, validating product concepts, refining flows, and collaborating with engineering teams.",
    deliverables: ["Interactive Clickable Prototypes", "Micro-Interactions & Transitions", "User Testing & Usability Audits", "Figma Auto-Layout & Variants"]
  }
];

export const PROCESS = [
  {
    step: "01",
    title: "Empathize",
    description: "Understanding the user is at the core of my process. I begin by researching user needs, behaviors, and pain points through user interviews, surveys, and competitive market analysis."
  },
  {
    step: "02",
    title: "Define",
    description: "I translate qualitative and quantitative research into clear problem statements, user personas, and customer journey maps to set the precise strategic direction for ideation."
  },
  {
    step: "03",
    title: "Ideate",
    description: "Through collaborative brainstorming and rapid sketching, I explore multiple creative solutions, prioritizing usability, simplicity, and technical feasibility."
  },
  {
    step: "04",
    title: "Design & Prototype",
    description: "I build responsive wireframes, pixel-perfect high-fidelity screens, cohesive design systems, and interactive prototypes for user testing and seamless developer handoff."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Co-founder of My Mediator App",
    quote: "Dakshnamoorthy delivered a stunning UI for our mobile app. He was responsive, collaborative, and brought fresh ideas to the table. The final design was not only beautiful but also highly functional.",
    avatar: "https://framerusercontent.com/images/TVuMWmmbEpLT6DpR83YglHVWg.jpg?width=609&height=609"
  },
  {
    id: 2,
    name: "Suresh Balan",
    role: "Operations Head at EnergyTech Solutions",
    quote: "His dashboard design transformed how we visualize our factory's energy data. The layout is clean, and the insights are now easy to understand at a glance. Great job!",
    avatar: "https://framerusercontent.com/images/1F6blGIcuUbjh4UkQMyuZi9ufh4.jpg?width=609&height=609"
  },
  {
    id: 3,
    name: "Vikram Jain",
    role: "Founder of Quuts",
    quote: "For our social media and brochures, Daksh's graphic designs were spot-on. Visually striking, well-aligned with our brand, and always delivered on time.",
    avatar: "https://framerusercontent.com/images/Brmkbsvgw7oq52QXNYK8FUciR0.jpg?width=609&height=609"
  }
];

export const FAQS = [
  {
    question: "What is your typical UI/UX design workflow?",
    answer: "I follow a proven 4-stage Design Thinking methodology: Empathize (user research and competitive analysis), Define (user personas and problem statements), Ideate (wireframing and sketches), and Design/Prototype (high-fidelity Figma designs, interactive prototypes, and developer handoff)."
  },
  {
    question: "How long does a design project take?",
    answer: "Most mobile apps and web platforms take 2-4 weeks depending on the number of screens and complexity. Landing pages and graphic design deliverables are typically ready within 3-7 days."
  },
  {
    question: "What deliverables will I receive?",
    answer: "You will receive organized Figma files with auto-layout, complete design tokens (colors, typography, components), interactive clickable prototypes, and developer handoff documentation with exported SVG/PNG assets."
  },
  {
    question: "Are you available for freelance projects or full-time roles?",
    answer: "Yes! I am available for freelance design projects, consulting collaborations, and exciting full-time UI/UX design opportunities. Feel free to reach out via the contact form or email."
  }
];

export const VIDEOS = [
  {
    id: 1,
    title: "Mobile App Interaction",
    src: "https://framerusercontent.com/assets/9mlXvE9TN1T6LvbfaPoK9F2bkBY.mp4",
    poster: "https://static.wixstatic.com/media/581991_ee2aeebfadb848239fd35ca589f1f573~mv2.png"
  },
  {
    id: 2,
    title: "Web Dashboard Interaction",
    src: "https://framerusercontent.com/assets/y9NMDyZ0ntX4xje6Ix5foOnkZHM.mp4",
    poster: "https://static.wixstatic.com/media/581991_244ac4c2707a4db19f97a12ac0c4c489~mv2.png"
  },
  {
    id: 3,
    title: "3D Motion Experience",
    src: "https://framerusercontent.com/assets/fiyZJo4xOiwxKrM3t8QYZ5LNYnk.mp4",
    poster: "https://static.wixstatic.com/media/581991_3a189551d3fd49b895c8bdaa1857f95d~mv2.png"
  }
];
