import schoolImg from "../assets/work/school-management.webp";
import liveRateImg from "../assets/work/liverate-trader.webp";
import f1Img from "../assets/work/f1-companion.webp";
import windletonImg from "../assets/work/windleton.webp";
import ascensionImg from "../assets/work/ascension.webp";
import gilbertImg from "../assets/work/finding-gilbert.webp";
import vrImg from "../assets/work/vr-effondrement.webp";

export type WorkGroup = "shipped" | "explorations" | "games";
export type WorkStatus = "statusInUse" | "statusShipped" | "statusPersonal" | "statusJam" | "statusSchool";

export interface WorkItem {
  id: string;
  group: WorkGroup;
  titleKey: string;
  descriptionKey: string;
  domainKey: string;
  statusKey: WorkStatus;
  platformKey: string;
  /** Only facts already stated in the copy; omitted when unknown. */
  years?: string;
  learnedKey?: string;
  highlights: string[];
  stack: string[];
  image?: { src: string; width: number; height: number };
  link?: { href: string; labelKey: string };
}

export const work: WorkItem[] = [
  {
    id: "school-management",
    group: "shipped",
    titleKey: "schoolMgmtTitle",
    descriptionKey: "schoolMgmtDescription",
    domainKey: "domainSchools",
    statusKey: "statusInUse",
    platformKey: "platformWeb",
    years: "2025–",
    highlights: ["schoolMgmtHighlight1", "schoolMgmtHighlight2", "schoolMgmtHighlight3"],
    stack: ["React 19", "TypeScript", "Django 5.2", "DRF", "PostgreSQL", "Docker", "MUI"],
    image: { src: schoolImg, width: 1280, height: 699 },
  },
  {
    id: "finetic-saas",
    group: "shipped",
    titleKey: "fineticProjectTitle",
    descriptionKey: "fineticProjectDescription",
    domainKey: "domainFinance",
    statusKey: "statusShipped",
    platformKey: "platformWeb",
    years: "2023–2025",
    learnedKey: "fineticProjectLearned",
    highlights: ["fineticProjectHighlight1", "fineticProjectHighlight2", "fineticProjectHighlight3"],
    stack: ["React", "TypeScript", "Material UI / Joy UI", "Python", "Django", "PostgreSQL", "Pytest", "Jest"],
  },
  {
    id: "liverate-trader",
    group: "explorations",
    titleKey: "liveRateTitle",
    descriptionKey: "liveRateDescription",
    domainKey: "domainTrading",
    statusKey: "statusPersonal",
    platformKey: "platformWeb",
    highlights: ["liveRateHighlight1", "liveRateHighlight2", "liveRateHighlight3"],
    stack: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "Zustand"],
    image: { src: liveRateImg, width: 1280, height: 698 },
  },
  {
    id: "f1-companion",
    group: "explorations",
    titleKey: "f1CompanionTitle",
    descriptionKey: "f1CompanionDescription",
    domainKey: "domainF1",
    statusKey: "statusPersonal",
    platformKey: "platformMobile",
    highlights: ["f1CompanionHighlight1", "f1CompanionHighlight2", "f1CompanionHighlight3"],
    stack: ["React", "TypeScript", "Expo SDK 56", "SignalR", "i18next"],
    image: { src: f1Img, width: 1280, height: 698 },
  },
  {
    id: "windleton",
    group: "games",
    titleKey: "windletonTitle",
    descriptionKey: "windletonDescription",
    domainKey: "domainGames",
    statusKey: "statusSchool",
    platformKey: "platformGame",
    highlights: [],
    stack: ["Unity", "C#"],
    image: { src: windletonImg, width: 1274, height: 709 },
    link: { href: "https://cheshirethegreatest.itch.io/windleton", labelKey: "downloadOnItch" },
  },
  {
    id: "ascension",
    group: "games",
    titleKey: "ascensionTitle",
    descriptionKey: "ascensionDescription",
    domainKey: "domainGames",
    statusKey: "statusPersonal",
    platformKey: "platformGame",
    highlights: [],
    stack: ["Unity", "C#"],
    image: { src: ascensionImg, width: 1280, height: 698 },
    link: { href: "https://dylanandrew.itch.io/ascension", labelKey: "playOnItch" },
  },
  {
    id: "finding-gilbert",
    group: "games",
    titleKey: "findingGilbertTitle",
    descriptionKey: "findingGilbertDescription",
    domainKey: "domainGames",
    statusKey: "statusJam",
    platformKey: "platformGame",
    years: "2024",
    highlights: [],
    stack: ["Unity", "C#"],
    image: { src: gilbertImg, width: 1280, height: 713 },
    link: { href: "https://dylanandrew.itch.io/finding-gilbert", labelKey: "playOnItch" },
  },
  {
    id: "vr-effondrement",
    group: "games",
    titleKey: "vrEffondrementTitle",
    descriptionKey: "vrEffondrementDescription",
    domainKey: "domainSafety",
    statusKey: "statusSchool",
    platformKey: "platformVr",
    highlights: [],
    stack: ["Unity", "C#", "VR"],
    image: { src: vrImg, width: 1280, height: 831 },
    link: { href: "https://toinoncoding.itch.io/vr-effondrement", labelKey: "playOnItch" },
  },
];

export interface Role {
  id: string;
  company: string;
  href: string;
  roleKey: string;
  periodKey: string;
  domainKey: string;
  bullets: string[];
}

export const roles: Role[] = [
  {
    id: "finetic",
    company: "Finetic",
    href: "https://www.finetic.eu",
    roleKey: "fineticRole",
    periodKey: "fineticPeriod",
    domainKey: "stopFineticDomain",
    bullets: [
      "fineticDescription1",
      "fineticDescription2",
      "fineticDescription3",
      "fineticDescription4",
      "fineticDescription5",
      "fineticDescription6",
    ],
  },
  {
    id: "tripalio",
    company: "Tripalio",
    href: "https://app.tripalio.fr/",
    roleKey: "tripalioRole",
    periodKey: "tripalioPeriod",
    domainKey: "stopTripalioDomain",
    bullets: ["tripalioDescription1", "tripalioDescription2", "tripalioDescription3"],
  },
  {
    id: "sahaza",
    company: "Sahaza Group",
    href: "https://www.linkedin.com/company/sahaza_group/",
    roleKey: "sahazaGroupRole",
    periodKey: "sahazaGroupPeriod",
    domainKey: "stopSahazaDomain",
    bullets: [
      "sahazaGroupDescription1",
      "sahazaGroupDescription2",
      "sahazaGroupDescription3",
      "sahazaGroupDescription4",
    ],
  },
];

export const contact = {
  email: "mailto:andrew21dylan@gmail.com",
  linkedIn: "https://www.linkedin.com/in/dylan-andrew-razafintsalama/",
  itch: "https://dylanandrew.itch.io/",
};
