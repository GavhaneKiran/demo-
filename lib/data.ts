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
    body: "Fair and Remunerative Price fixed at ₹340/quintal as per GoI notification.",
    date: "1 Apr 2025",
    linkLabel: "View Gazette",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    icon: "⚡",
    title: "3.5 MW Co-generation Power Plant",
    titleMr: "सहउत्पादन वीज प्रकल्प",
    description:
      "Expanding power co-generation using bagasse to supply surplus electricity.",
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
      "Setting up a 45 KLPD ethanol plant aligned with GoI Ethanol Blending Programme.",
    status: "planned",
    statusLabel: "DPR Prepared",
    investment: "Estimated Investment: ₹42 Crore",
  },
];

export const jobs: Job[] = [
  {
    id: 1,
    title: "Mechanical Engineer",
    titleMr: "यांत्रिक अभियंता",
    icon: "⚙️",
    vacancies: 2,
    qualification: "B.E Mechanical",
    type: "Full Time",
    status: "open",
  },
  {
    id: 2,
    title: "Plant Operator",
    titleMr: "प्लांट ऑपरेटर",
    icon: "🏭",
    vacancies: 3,
    qualification: "Diploma Mechanical",
    type: "Full Time",
    status: "open",
  },
  {
    id: 3,
    title: "Account Officer",
    titleMr: "लेखा अधिकारी",
    icon: "📊",
    vacancies: 1,
    qualification: "B.Com / M.Com",
    type: "Full Time",
    status: "closed",
  },
];