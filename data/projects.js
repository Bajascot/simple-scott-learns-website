// ============================================================
// Simple Scott Learns — Projects Data
// Edit this file to update the Projects page.
// ============================================================

const PROJECTS = [
  {
    id: "digital-promotions-platform",
    type: "professional",
    title: "Digital Promotions Management Tool",
    status: "completed",
    year: "2020–2024",
    summary: "Built Nike's Digital Promotions Management Tool from the ground up — delivering the first working version within six months and iterating on it for the duration of the role. Became the global system of record for digital promotions across every Nike geo, enabling Digital Experiences teams to run campaigns that drove measurable improvements in consumer engagement, UPT, and checkout success rates.",
    tags: ["0-1-development", "product-management", "ecommerce", "global", "platform"]
  },
  {
    id: "seo-migration",
    type: "professional",
    title: "SEO Value Migration — Search Platform Transition",
    status: "completed",
    year: "2018–2020",
    summary: "Developed a system to migrate all SEO value and search terms from Nike's legacy Endeca search platform to the new ML-based system — preserving organic search equity built over years without requiring a full re-index. The migration saved nearly 120 hours of development time that would otherwise have been spent manually recreating search term mappings.",
    tags: ["seo", "search", "platform", "ecommerce", "data-migration"]
  },
  {
    id: "payments-reporting-automation",
    type: "professional",
    title: "Digital Payments Financial Reporting Automation",
    status: "completed",
    year: "2024–2026",
    summary: "Automated the collection of financial reporting data for Nike's Digital Payments monthly business reviews. Prior to this project, compiling MBR data took approximately six hours per month across manual pulls from multiple systems. The automated solution reduced that to fifteen minutes — a 95% reduction in time spent — freeing the team to focus on analysis rather than data gathering.",
    tags: ["payments", "automation", "data-analysis", "reporting", "fintech"]
  },
  {
    id: "the-shed",
    type: "personal",
    title: "The Shed — 3D Printing Studio & Home Office",
    status: "completed",
    year: "2022",
    summary: "Built a dedicated backyard shed to house a growing 3D printing hobby and serve as a home office. Purpose-built with a ventilated printer enclosure, full workshop space, and a system to signal availability to the family during the workday.",
    tags: ["3d-printing", "woodworking", "maker", "work-from-home", "diy"],
    whatWasTheNeed: "The primary need was simple: my 3D printing hobby had outgrown the house. With multiple printers, filament storage, post-processing equipment, and the general chaos that comes with running prints, there was no good place inside the home to do it properly. Add three kids, a house that was already bursting at the seams, and a fully remote job that needed a dedicated workspace, and the case for a separate structure became obvious. The hobby needed a real home — and so did the workday.",
    whyTheSolution: "The answer was a dedicated backyard shed — purpose-built to serve as both a 3D printing workshop and a home office. The shed was designed to house multiple printers with enough workspace to process prints and work on equipment. A ventilated enclosure was built inside specifically for printing with materials that produce toxic fumes, allowing for a wider range of materials without compromising safety. The space does double duty: when the workday starts, it's an office; when the laptop closes, it's a workshop.",
    otherHalf: "What the shed gave me wasn't just square footage — it was focus. Working from home with a family means the boundary between work and life can dissolve completely if you let it. The shed made the boundary physical. I added a simple indicator system to let my family know when I was working or in a meeting, which meant fewer interruptions and more genuine presence — both in meetings with my teams, and with my family when the workday was done. It turns out that a structure in the backyard did more for work-life balance than any productivity system I'd ever tried.",
    images: [
      "images/projects/the-shed/enclosure-build.jpg",
      "images/projects/the-shed/workspace.jpg",
      "images/projects/the-shed/blue-glow.jpg",
      "images/projects/the-shed/ventilation.jpg"
    ],
    standaloneLink: "projects/the-shed.html"
  },
  {
    id: "printfarm-tracker",
    type: "personal",
    title: "3D Printer Consumables Tracker",
    status: "in-progress",
    year: "2026",
    summary: "A locally-hosted 3D print farm tracker running on a Raspberry Pi. Tracks filament inventory, calculates per-print costs using filament weight and energy consumption, monitors printer runtime, and integrates with Klipper/Moonraker printers and Govee smart plugs.",
    tags: ["3d-printing", "raspberry-pi", "python", "react", "maker"],
    whatWasTheNeed: "Running multiple 3D printers means burning through filament fast — and having no real idea what anything actually costs. I knew roughly what spools cost and roughly how long prints took, but I had no way to connect those numbers into a true cost-per-print. I also had no central place to see what filament I had on hand, what was running low, and what jobs had been completed across all my printers. The hobby needed a system.",
    whyTheSolution: "The solution is a locally-hosted web application running on a Raspberry Pi inside the shed — keeping everything on the local network without any cloud dependency. The backend is built in Python with FastAPI, the frontend in React, and data is stored in SQLite. The tracker integrates directly with Moonraker/Klipper to automatically detect when a print starts and ends, polls Govee smart plugs every 60 seconds to accumulate real energy consumption per job, and watches a slicer output folder for new gcode files to pre-populate job records. The result is a per-print cost calculated from actual filament weight used and actual electricity consumed — not estimates.",
    otherHalf: "This project is the first time I've built something technical entirely for myself, from scratch, with no brief and no stakeholder. Every decision — the tech stack, the architecture, the features — was mine. That's a different kind of challenge than product management, where the goal is usually to constrain and focus. Here the constraint had to come from me. It's taught me a lot about how hard it actually is to define scope when no one's asking you to ship anything by a particular date. Still in progress — and that's part of the point.",
    images: [],
    standaloneLink: "projects/printfarm-tracker.html"
  }
];

function getAllProjectTags() {
  const counts = {};
  PROJECTS.forEach(p => {
    p.tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
}

function filterProjectsByTag(tag) {
  if (!tag) return PROJECTS;
  return PROJECTS.filter(p => p.tags.includes(tag));
}