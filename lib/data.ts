import type { Tender, Notice, Project, Job } from "@/types";

export const tenders: Tender[] = [
  {
    id: "1",
    ref: "BCSSK/TEN/2025/047",
    title: "Supply & Erection of 3.5 MW Co-generation Power Plant",
    titleMr: "३.५ मेगावॅट सहउत्पादन वीज प्रकल्प — पुरवठा व उभारणी",
    category: "machinery",
    badge: "urgent",
    emd: "₹5,00,000",
    deadline: "30 Apr 2025",
    published: "01 Apr 2025",
  },
  {
    id: "2",
    ref: "BCSSK/TEN/2025/038",
    title: "Procurement of Sugarcane Harvesters (2 Units)",
    titleMr: "ऊस तोडणी यंत्र (२ नग) — खरेदी निविदा",
    category: "agriculture",
    badge: "tender",
    emd: "₹1,50,000",
    deadline: "15 May 2025",
    published: "20 Mar 2025",
  },
  {
    id: "3",
    ref: "BCSSK/TEN/2025/031",
    title: "Annual AMC for Boiler & Turbine Equipment",
    titleMr: "बॉयलर व टर्बाइन — वार्षिक देखभाल करार",
    category: "machinery",
    badge: "tender",
    emd: "₹50,000",
    deadline: "10 May 2025",
    published: "18 Mar 2025",
  },
  {
    id: "4",
    ref: "BCSSK/EOI/2025/012",
    title: "Expression of Interest — Ethanol Production Unit Setup",
    titleMr: "इथेनॉल उत्पादन युनिट — स्वारस्य अभिव्यक्ती",
    category: "it",
    badge: "notice",
    emd: "No EMD",
    deadline: "25 May 2025",
    published: "10 Mar 2025",
  },
];

export const notices: Notice[] = [
  {
    id: "1",
    type: "general",
    title: "Annual General Meeting 2024–25",
    titleMr: "वार्षिक सर्वसाधारण सभा — सभासदांना आमंत्रण",
    body: "The 53rd AGM will be held on 15 May 2025 at BCSSK Main Hall. All members are requested to attend with valid membership ID.",
    date: "5 Apr 2025",
    linkLabel: "Read More",
  },
  {
    id: "2",
    type: "urgent",
    title: "FRP Rate Announcement 2024–25 Season",
    titleMr: "उचित व रास्त भाव जाहीर — ₹३४०/क्विंटल",
    body: "Fair and Remunerative Price fixed at ₹340/quintal as per GoI notification. Linked premium to be announced post-season.",
    date: "1 Apr 2025",
    linkLabel: "View Gazette",
  },
  {
    id: "3",
    type: "general",
    title: "Cane Registration for Kharip 2025",
    titleMr: "खरीप २०२५ साठी ऊस नोंदणी सुरू",
    body: "Sugarcane registration is now open. Register at nearest BCSSK field office or via online portal by 30 June 2025.",
    date: "28 Mar 2025",
    linkLabel: "Register Now",
  },
  {
    id: "4",
    type: "tender",
    title: "Corrigendum – Harvester Tender (TEN/038)",
    titleMr: "दुरुस्ती सूचना — हार्वेस्टर निविदा",
    body: "Technical specification amendment for sugarcane harvester procurement. Revised specs available for download. Last date unchanged.",
    date: "22 Mar 2025",
    linkLabel: "Download Corrigendum",
  },
  {
    id: "5",
    type: "general",
    title: "Member Dividend Declaration 2023–24",
    titleMr: "सभासद लाभांश जाहीर — २०२३–२४",
    body: "Board approved 8% dividend on share capital for 2023–24. Will be credited to member accounts by 30 April 2025.",
    date: "18 Mar 2025",
    linkLabel: "Details",
  },
  {
    id: "6",
    type: "rti",
    title: "RTI Disclosure – Q4 2024–25",
    titleMr: "माहिती अधिकार — चौथी तिमाही प्रकटीकरण",
    body: "Quarterly RTI disclosures including financial statements, board meeting minutes, and purchase decisions are now published.",
    date: "10 Mar 2025",
    linkLabel: "View RTI Files",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    icon: "⚡",
    title: "3.5 MW Co-generation Power Plant",
    titleMr: "सहउत्पादन वीज प्रकल्प",
    description:
      "Expanding power co-generation using bagasse to supply surplus electricity to MSEDCL grid, creating a sustainable revenue stream.",
    status: "progress",
    statusLabel: "Tender Issued",
    investment: "Estimated Investment: ₹28 Crore",
  },
  {
    id: "2",
    icon: "🏭",
    title: "Integrated Ethanol Distillery Unit",
    titleMr: "इथेनॉल उत्पादन युनिट",
    description:
      "Setting up a 45 KLPD ethanol plant aligned with GoI's Ethanol Blending Programme, adding value to molasses by-product.",
    status: "planned",
    statusLabel: "DPR Prepared",
    investment: "Estimated Investment: ₹42 Crore",
  },
  {
    id: "3",
    icon: "💧",
    title: "Drip Irrigation Scheme for Members",
    titleMr: "सभासद शेतकऱ्यांसाठी ठिबक सिंचन",
    description:
      "Subsidized drip irrigation across 5,000 acres of member farms to reduce water use, improve cane quality, and boost income.",
    status: "approved",
    statusLabel: "Govt. Approved",
    investment: "Subsidy: ₹8 Crore (GoM Grant)",
  },
  {
    id: "4",
    icon: "🏗️",
    title: "Factory Modernization – Crushing Upgrade",
    titleMr: "गाळप क्षमता वाढ — आधुनिकीकरण",
    description:
      "Upgrading tandem mill to increase crushing from 3,500 TCD to 5,000 TCD with automation controls.",
    status: "planned",
    statusLabel: "Planning Phase",
    investment: "Estimated Investment: ₹18 Crore",
  },
  {
    id: "5",
    icon: "🎓",
    title: "Agri-Tech Training Centre",
    titleMr: "शेतकरी कृषी-तंत्र प्रशिक्षण केंद्र",
    description:
      "Training facility for member farmers covering precision agriculture, soil health, and modern cane cultivation. Capacity: 200/batch.",
    status: "planned",
    statusLabel: "Site Identified",
    investment: "Estimated Cost: ₹3.5 Crore",
  },
  {
    id: "6",
    icon: "📱",
    title: "Digital Portal – Farmer Self-Service",
    titleMr: "शेतकरी डिजिटल सेवा केंद्र",
    description:
      "Online portal for cane registration, payment tracking, slip downloads, and grievances — in Marathi with mobile-first design.",
    status: "progress",
    statusLabel: "In Development",
    investment: "Launch Target: Kharip 2025",
  },
];

export const jobs = [
  {
    id: 1,
    title: "Mechanical Engineer",
    titleMr: "यांत्रिक अभियंता",
    icon: "⚙️",
    vacancies: 2,
    qualification: "B.E. Mechanical",
    open: true
  },
  {
    id: 2,
    title: "Plant Operator",
    titleMr: "प्लांट ऑपरेटर",
    icon: "🏭",
    vacancies: 3,
    qualification: "Diploma Mechanical",
    open: true
  },
  {
    id: 3,
    title: "Account Officer",
    titleMr: "लेखा अधिकारी",
    icon: "📊",
    vacancies: 1,
    qualification: "B.Com / M.Com",
    open: false
  }
]
