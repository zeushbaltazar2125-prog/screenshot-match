/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit this file to personalise the website.
 *  Everything visitors read (name, links, services, portfolio)
 *  lives here, so you rarely need to touch the components.
 * ─────────────────────────────────────────────────────────────
 */
import workBrandKit from "@/assets/work-brand-kit.jpg";
import workSocialFeed from "@/assets/work-social-feed.jpg";
import workInbox from "@/assets/work-inbox.jpg";
import workAdmin from "@/assets/work-admin.jpg";
import workWebsite from "@/assets/work-website.jpg";
import workSupport from "@/assets/work-support.jpg";
import workResearch from "@/assets/work-research.jpg";
import posterTattoo from "@/assets/poster-tattoo-studio.png.asset.json";
import posterGig from "@/assets/poster-gig-event.png.asset.json";
import dataInventory from "@/assets/data-inventory-sheet.png.asset.json";
import dataCustomers from "@/assets/data-customer-database.png.asset.json";
import dataLeads from "@/assets/data-lead-database.png.asset.json";

const dataEntryDisclaimer =
  "These are only sample works I have found on the internet, none of the details provided are real. They are only fictional.";

export const site = {
  name: "Adam Zeush Baltazar",
  shortName: "Adam Baltazar",
  role: "Virtual Assistant & Freelance Support",
  // Optional: replace with a real photo import, e.g. import photo from "@/assets/me.jpg"
  profilePhoto: null as string | null,
};

/** Replace every placeholder below with your real details. */
export const contact = {
  email: "zeushbaltazar2125@gmail.com",
  links: [
    { label: "Email", value: "zeushbaltazar2125@gmail.com", href: "mailto:zeushbaltazar2125@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/adam-zeush-a4a9a2253", href: "https://www.linkedin.com/in/adam-zeush-a4a9a2253/" },
    { label: "Facebook", value: "facebook.com/tomienotalive", href: "https://www.facebook.com/tomienotalive/" },
    { label: "WhatsApp", value: "+63 960 219 1582", href: "https://wa.me/639602191582" },
    { label: "Freelancer", value: "freelancer.com/u/zeushadam", href: "https://www.freelancer.com/u/zeushadam" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
] as const;

export const strengths = [
  { title: "Clear communication", text: "Timely updates, concise messages and no guesswork about where a task stands." },
  { title: "Multitasking", text: "Juggling several priorities without letting details slip through the cracks." },
  { title: "Time management", text: "Deadlines planned backwards, so work is delivered on schedule — not just before it." },
  { title: "Problem-solving", text: "When something breaks, I look for the fix first and bring options, not just problems." },
  { title: "Calm under pressure", text: "Rush requests and shifting priorities handled with focus and a steady head." },
];

export type ServiceIcon =
  | "assistant"
  | "admin"
  | "data"
  | "calendar"
  | "support"
  | "social"
  | "design"
  | "website";

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  { icon: "assistant", title: "General Virtual Assistance", text: "Day-to-day tasks taken off your plate — research, follow-ups, bookings and errands that eat into your focus time." },
  { icon: "admin", title: "Administrative Support", text: "Organised documents, tidy shared drives, prepared reports and processes that keep your business running smoothly." },
  { icon: "data", title: "Data Entry & Management", text: "Accurate, consistent data in spreadsheets and CRMs — cleaned, de-duplicated and easy to work with." },
  { icon: "calendar", title: "Email & Calendar Management", text: "An inbox under control and a calendar that protects your time, with replies drafted and meetings scheduled." },
  { icon: "support", title: "Customer Support", text: "Friendly, prompt responses to customer questions by email or chat, following your tone and policies." },
  { icon: "social", title: "Social Media Assistance", text: "Content scheduling, caption writing and community replies that keep your pages active and consistent." },
  { icon: "design", title: "Canva Graphic Design", text: "On-brand social posts, presentations, flyers and templates designed in Canva and ready to publish." },
  { icon: "website", title: "No-Code Website Creation", text: "Simple, modern websites and landing pages built with no-code tools — launched quickly and easy to update." },
];

export type ToolIcon = "canva" | "google" | "office" | "chatgpt" | "lovable" | "other";

export const tools: { icon: ToolIcon; name: string; text: string; tags: string[] }[] = [
  { icon: "canva", name: "Canva", text: "Graphics, presentations and reusable brand templates.", tags: ["Design", "Templates"] },
  { icon: "google", name: "Google Workspace", text: "Gmail, Calendar, Drive, Docs, Sheets and Forms.", tags: ["Email", "Docs", "Sheets"] },
  { icon: "office", name: "Microsoft Office", text: "Word, Excel, PowerPoint and Outlook.", tags: ["Excel", "Word", "Outlook"] },
  { icon: "chatgpt", name: "ChatGPT", text: "Drafting, summarising and speeding up research.", tags: ["AI", "Writing"] },
  { icon: "lovable", name: "Lovable", text: "Building and launching websites without code.", tags: ["No-code", "Web"] },
  { icon: "other", name: "Other productivity tools", text: "Project boards, team chat, video calls and cloud storage.", tags: ["Collaboration", "Organisation"] },
];

/* ─────────────────────────── Portfolio ─────────────────────────── */

export const portfolioCategories = [
  "Canva Graphic Designs",
  "Social Media Designs",
  "Administrative Tasks",
  "Data Entry Samples",
  "Website Projects",
  "Other VA Tasks",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type Project = {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  /** Extra images shown in the project pop-up (optional). */
  gallery?: string[];
  /** Shown on the card and in the pop-up (optional). */
  disclaimer?: string;
  summary: string;
  description: string;
  deliverables: string[];
  tools: string[];
};

/**
 * Sample projects — replace the image, title and text with your own work.
 * To add a project: import an image at the top of this file and add an entry here.
 */
export const projects: Project[] = [
  {
    id: "minimal-social-post-set",
    title: "Minimal Social Post Set",
    category: "Canva Graphic Designs",
    image: posterTattoo.url,
    gallery: [posterTattoo.url, posterGig.url],
    summary: "Promotional posters for a tattoo studio and a local skate & music event.",
    description: "Two promotional posters designed in Canva: one for a tattoo and piercing studio showcasing its work and location, and one for a skate competition and gig with schedules, prizes and the band line-up.",
    deliverables: ["Tattoo studio promo poster", "Event / gig poster", "Print and social-ready exports"],
    tools: ["Canva"],
  },
  {
    id: "brand-kit-presentation",
    title: "Brand Kit & Presentation Deck",
    category: "Canva Graphic Designs",
    image: workBrandKit,
    summary: "Logo usage, stationery and a matching presentation template.",
    description: "Sample project. A compact brand kit — business cards, letterhead and slide template — designed to keep every client-facing document consistent.",
    deliverables: ["Business card front & back", "Letterhead", "10-slide presentation template"],
    tools: ["Canva"],
  },
  {
    id: "instagram-feed-plan",
    title: "Instagram Feed Planning",
    category: "Social Media Designs",
    image: workSocialFeed,
    summary: "A planned, visually consistent grid for a month of content.",
    description: "Sample project. A monthly content plan with a pre-arranged grid preview, captions and posting schedule, so the feed looks intentional from the first post to the last.",
    deliverables: ["30-day content calendar", "Grid preview", "Captions & hashtags"],
    tools: ["Canva", "Google Sheets", "Meta Business Suite"],
  },
  {
    id: "inbox-calendar-cleanup",
    title: "Inbox & Calendar Organisation",
    category: "Administrative Tasks",
    image: workInbox,
    summary: "Labels, filters and a colour-coded weekly calendar system.",
    description: "Sample project. An overflowing inbox reorganised with labels, filters and reply templates, plus a colour-coded calendar with focus blocks and meeting rules.",
    deliverables: ["Label & filter system", "Canned reply templates", "Calendar structure"],
    tools: ["Gmail", "Google Calendar"],
  },
  {
    id: "document-filing-system",
    title: "Document & Filing System",
    category: "Administrative Tasks",
    image: workAdmin,
    summary: "A clear folder structure and naming convention for shared files.",
    description: "Sample project. A shared drive restructured with a simple folder hierarchy, consistent file naming and a one-page guide so the whole team can find documents quickly.",
    deliverables: ["Folder structure", "Naming convention guide", "Archived old files"],
    tools: ["Google Drive", "Google Docs"],
  },
  {
    id: "inventory-management-sheet",
    title: "Inventory Management Sheet",
    category: "Data Entry Samples",
    image: dataInventory.url,
    disclaimer: dataEntryDisclaimer,
    summary: "Product inventory with prices, stock totals and status flags.",
    description: "A product inventory tracker in Google Sheets with unit prices, stock quantities, automatic total values and colour-coded stock status (in stock, low stock, out of stock).",
    deliverables: ["Structured product list", "Total value formulas", "Conditional stock status"],
    tools: ["Google Sheets"],
  },
  {
    id: "customer-database",
    title: "Customer Database",
    category: "Data Entry Samples",
    image: dataCustomers.url,
    disclaimer: dataEntryDisclaimer,
    summary: "Customer records with contact details and order status tracking.",
    description: "A customer database in Google Sheets with IDs, names, emails, phone numbers and cities, plus a drop-down order status (completed, pending, shipped, processing).",
    deliverables: ["Clean customer records", "Order status drop-downs", "Filter-ready columns"],
    tools: ["Google Sheets"],
  },
  {
    id: "lead-generation-database",
    title: "Lead Generation Database",
    category: "Data Entry Samples",
    image: dataLeads.url,
    disclaimer: dataEntryDisclaimer,
    summary: "Business leads organised by industry, contact and lead status.",
    description: "A lead generation list in Google Sheets with company names, industries, websites, contact people, emails, locations and a colour-coded lead status pipeline.",
    deliverables: ["Researched lead list", "Lead status pipeline", "Linked websites"],
    tools: ["Google Sheets"],
  },
  {
    id: "product-landing-page",
    title: "Product Landing Page",
    category: "Website Projects",
    image: workWebsite,
    summary: "A responsive one-page site built with no-code tools.",
    description: "Sample project. A clean landing page for a small product brand, built with a no-code builder and tested on desktop, tablet and mobile.",
    deliverables: ["Responsive landing page", "Contact form", "Basic SEO setup"],
    tools: ["Lovable", "Canva"],
  },
  {
    id: "support-reply-templates",
    title: "Customer Support Playbook",
    category: "Other VA Tasks",
    image: workSupport,
    summary: "Ready-to-use replies for the most common customer questions.",
    description: "Sample project. A support playbook with friendly reply templates, escalation steps and a simple tracker for open tickets.",
    deliverables: ["Reply templates", "Escalation guide", "Ticket tracker"],
    tools: ["Google Docs", "Google Sheets", "ChatGPT"],
  },
  {
    id: "market-research-summary",
    title: "Market Research Summary",
    category: "Other VA Tasks",
    image: workResearch,
    summary: "Competitor research turned into a short, readable report.",
    description: "Sample project. Research on competitors' pricing and offers, summarised into a short report with charts and key takeaways for decision-making.",
    deliverables: ["Research spreadsheet", "Summary report", "Charts"],
    tools: ["Google Sheets", "Google Docs", "ChatGPT"],
  },
];
