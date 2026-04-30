// ============================================================
// Simple Scott Learns — Jobs Data
// Edit this file to update Timeline and Deeper Dive pages.
// ============================================================

const JOBS = [
  {
    id: "market-contractors",
    company: "Market Contractors",
    location: "Portland, OR & Seattle, WA",
    startYear: 2002,
    endYear: 2009,
    title: "IT Director",
    summary: "Sole IT leader for a national commercial construction company with offices in Portland and Seattle. Owned all technology infrastructure — from an on-premise data center to field worker support across multiple remote job sites.",
    modalDescription: "Served as the single IT resource for a national commercial construction company operating across Oregon and Washington. Owned everything from the on-premise data center and networking infrastructure to email systems, hardware, and phone support for field supervisors across multiple active job sites. One of the most impactful contributions was building custom ERP reports that gave leadership real visibility into project and operational data for the first time. This role built a foundation of hands-on technical ownership and problem-solving under constraints that shaped everything that followed.",
    otherHalf: "Being the only technical person in a company means there's no one to ask and no playbook to follow. The growth here was learning to be comfortable being the expert in the room even when you're still figuring it out — and discovering that showing up consistently and solving problems under pressure builds a kind of trust that no title can.",
    tags: ["it-infrastructure", "leadership", "erp", "networking", "construction"],
    progressions: [
      {
        start: "2002",
        end: "2009",
        title: "IT Director",
        description: "Served as the single IT resource for a national commercial construction company specializing in white shell build-outs. Managed an on-premise data center, all networking infrastructure, email systems, hardware, and phone systems. Supported multiple field supervisors and remote workers across Oregon and Washington job sites. Administered and maintained the company's ERP system, developing custom reports that gave leadership visibility into project and operational data — a skill that would shape the next chapter of my career.",
        tags: ["it-infrastructure", "erp", "leadership", "remote-support", "data-management"]
      }
    ]
  },
  {
    id: "viewpoint-construction-software",
    company: "Viewpoint Construction Software",
    location: "Portland, OR",
    startYear: 2009,
    endYear: 2015,
    title: "Product Manager",
    summary: "Joined Viewpoint as their sole custom report support specialist and progressed through four distinct roles over six years — from report support to report design, scrum master, and ultimately product manager for a newly formed team.",
    modalDescription: "Joined Viewpoint as the only person supporting custom reporting for their construction ERP platform, bringing direct experience from having used it at Market Contractors. Over six years progressed through four roles — report support, report designer, scrum master across two teams, and finally product manager for a newly formed team. Introduced agile delivery practices to the engineering team and grew into full backlog ownership, roadmap definition, and feature delivery. This role marked the formal start of a product management career built on unusually deep technical and customer context.",
    otherHalf: "Six years, four roles — but the real story is about learning to see the product from every angle before ever calling myself a product manager. Starting in support meant understanding what actually frustrated customers. Moving into design meant understanding what engineers needed. Becoming a scrum master meant understanding what teams needed to do their best work. By the time the PM role came, the foundation was already built.",
    tags: ["product-management", "agile-scrum", "leadership"],
    progressions: [
      {
        start: "2009",
        end: "2011",
        title: "Custom Report Support Specialist",
        description: "Joined Viewpoint as the sole support resource for custom reporting — leveraging hands-on ERP experience gained at Market Contractors. Helped Viewpoint customers design and troubleshoot their own custom reports against the platform, quickly becoming the go-to expert for complex reporting needs across the customer base.",
        tags: ["customer-support", "data-analysis", "requirements-gathering", "client-management"]
      },
      {
        start: "2011",
        end: "2011",
        title: "Report Designer",
        description: "Transitioned from customer-facing support into an internal product role designing reports for a new Viewpoint module under active development. Worked closely with engineering and product teams to define and build the reporting layer for the new product.",
        tags: ["product-design", "data-visualization", "requirements-gathering", "cross-functional-collaboration"]
      },
      {
        start: "2011",
        end: "2013",
        title: "Report Designer & Scrum Master",
        description: "Took on the Scrum Master role in addition to report design responsibilities — growing into agile delivery leadership while continuing to contribute to the product. Facilitated sprint ceremonies, removed blockers, and coached the team on agile practices. Eventually expanded to serve as Scrum Master for a second development team, managing two teams concurrently.",
        tags: ["team-facilitation", "leadership", "coaching", "delivery-management", "multi-team-management"]
      },
      {
        start: "2013",
        end: "2015",
        title: "Product Manager",
        description: "Moved into a full Product Manager role for a newly formed team at Viewpoint. Responsible for defining the product roadmap, writing requirements, prioritizing the backlog, and working with engineering to deliver features. This role marked the formal beginning of a product management career built on a foundation of deep technical and customer knowledge.",
        tags: ["roadmapping", "stakeholder-management", "leadership", "feature-delivery"]
      }
    ]
  },
  {
    id: "tilson-technology",
    company: "Tilson Technology",
    location: "Portland, OR",
    startYear: 2015,
    endYear: 2015,
    title: "Software Developer / Implementation Consultant",
    summary: "Joined a consulting firm specializing in on-premise Viewpoint implementations, applying deep platform knowledge to both implement features for clients and manage concurrent project delivery.",
    modalDescription: "Applied deep Viewpoint platform expertise in a client-facing consulting capacity, helping companies transition onto the system and get up and running quickly. Managed multiple concurrent implementation projects, combining hands-on feature development with project oversight and stakeholder management. The role was a direct application of everything learned at Viewpoint — knowing the product from the inside made it possible to implement faster and troubleshoot more effectively than most consultants. A focused chapter that reinforced the value of deep domain knowledge in client delivery.",
    otherHalf: "There's a version of expertise that lives only in your own head. Consulting forced a different kind — one where you have to transfer knowledge fast, earn trust quickly, and deliver in someone else's environment. It was a short chapter, but it confirmed something important: real understanding shows up most clearly when you have to explain it to someone who's never seen it before.",
    tags: ["consulting", "implementation", "project-management"],
    progressions: [
      {
        start: "Early 2015",
        end: "Mid 2015",
        title: "Software Developer / Implementation Consultant",
        description: "Applied hands-on Viewpoint expertise in a client-facing consulting capacity. Implemented Viewpoint features for customers transitioning to the platform and managed multiple concurrent implementation projects. Combined technical development skills with project management to deliver client engagements on time.",
        tags: ["implementation", "client-management", "feature-delivery", "stakeholder-management"]
      }
    ]
  },
  {
    id: "tanger-guild",
    company: "Tanger Guild",
    location: "Portland, OR",
    startYear: 2015,
    endYear: 2016,
    title: "Scrum Master",
    summary: "Brought in to stabilize a struggling development team building an HP-integrated communications product. The primary challenge was less about process and more about people — extracting a sequestered team from an unproductive environment and rebuilding their confidence to deliver.",
    modalDescription: "Brought in to stabilize a development team that had fallen behind on Caller Dashboard — an HP-integrated product designed to unify phone, email, and text communication across laptops and mobile devices. The team had been sequestered at the stakeholder's location in an attempt to force productivity, which was damaging morale and making delivery worse. The real mission was extracting the team from that environment, restoring psychological safety, and rebuilding trust between the team and stakeholders. By re-establishing healthy sprint ceremonies and a sustainable working environment, the team regained the confidence to shore up the product and get it to a functional state.",
    otherHalf: "The hardest thing about this role wasn't the product or the process — it was walking into a room full of people who had been told that working harder in the wrong environment would eventually fix things. The growth here was learning that the most important thing a leader can do sometimes is change the conditions, not the people. A team that feels safe and trusted will outperform a team that feels watched every time.",
    tags: ["0-1-development", "stakeholder-management", "agile-scrum"],
    progressions: [
      {
        start: "Mid 2015",
        end: "2016",
        title: "Scrum Master",
        description: "Brought in to stabilize a struggling development team building Caller Dashboard — an HP-integrated product designed to ship pre-installed on HP laptops, unifying phone, email, and text communication across devices. The team had fallen behind and was being sequestered at the stakeholder's location in an attempt to force productivity — an arrangement that was eroding morale and making delivery worse, not better. The primary mission was to extract the team from that environment, restore psychological safety, and rebuild their confidence in their own ability to deliver. Re-established healthy sprint ceremonies, rebuilt trust between the team and stakeholders, and created the conditions for the team to focus on shoring up the product and getting it to a functional state. A formative experience in understanding that team health and environment are as critical to delivery as process or technical skill.",
        tags: ["stakeholder-management", "coaching", "delivery-management", "leadership", "0-1-development"]
      }
    ]
  },
  {
    id: "nike",
    company: "Nike",
    location: "Beaverton, OR (Remote)",
    startYear: 2016,
    endYear: 2026,
    title: "Lead Product Manager, Digital Payment Services",
    summary: "Ten-year Nike career spanning four major product domains — Search, SEO & Data Tagging, Digital Promotions, and Digital Payment Services. Progressed from Product Manager to Lead Product Manager, delivering globally scaled platforms and measurable business outcomes including a $37M incremental revenue result.",
    modalDescription: "Ten years at Nike across four distinct product domains — Search, SEO & Data Tagging, Digital Promotions, and Digital Payment Services. Started as a Product Manager on Nike's Endeca search platform, onboarding new geos and building search strategies, then led a team building SEO infrastructure to improve Nike's organic product discoverability globally. Transitioned into Digital Promotions where a new Digital Promotions Management Tool was built from prototype to the global system of record used across every Nike geo, driving measurable improvements in consumer engagement, UPT, and checkout success rates. Concluded as Lead Product Manager owning Nike's full payment product stack — delivering $37M in annualized incremental demand, leading geo expansions into Australia and Canada, and managing strategic relationships with 13+ payment vendors worldwide.",
    otherHalf: "Ten years is long enough to see yourself change. The early years at Nike were about learning to operate at scale — bigger teams, bigger stakes, more stakeholders than I'd ever managed before. The middle years, in Promotions, were about building something durable and then having the discipline to let it go. The final chapter, in Payments, taught me that at scale, the way you show up in the small moments — a vendor call, an incident review, a sprint retro — is what determines whether the big ones go well. The product is almost never the hardest part.",
    tags: ["vendor-management", "payments-fintech", "global-ecommerce", "team-leadership"],
    progressions: [
      {
        start: "2016",
        end: "2018",
        title: "Product Manager, Search (Endeca)",
        description: "Joined Nike as a Product Owner on the Search team, responsible for Nike's legacy search platform built on Endeca technology. Created new search indexes and developed search strategies to improve product discoverability across Nike's digital properties. Onboarded new geographic markets onto the search platform, ensuring each geo's product catalog was correctly indexed and surfaced to consumers. Worked closely with engineering and geo teams to tune search relevance and expand platform coverage.",
        tags: ["product-management", "geo-expansion", "ecommerce", "platform", "data-analysis"]
      },
      {
        start: "2018",
        end: "2020",
        title: "Senior Product Manager, SEO & Data Tagging",
        description: "Led a new team focused on on-premise services that powered Nike's SEO strategy and product data tagging. Built systems to help Nike better signal product data to search engines such as Google and Bing — ensuring that when consumers searched for Nike products, they found them. Worked across engineering, marketing, and geo teams to define tagging standards, implement structured data, and improve Nike's organic search presence globally.",
        tags: ["ecommerce", "organic-search", "cross-functional-collaboration", "team-leadership"]
      },
      {
        start: "2020",
        end: "2024",
        title: "Senior Product Manager, Digital Promotions",
        description: "Primary PM for Nike's Digital Promotions platform — built a new Digital Promotions Management Tool from its first prototype to the globally deployed system of record used across every Nike geo. Allowing Digital Experiences teams to better run promotion campaigns leading to an elevation of consumer engagement, UPT, and checkout success rates. Iteratively added support for new promotion strategies determined by Digital Experiences team feedback along with customer engagement. Expanded scope to include a multi-phase Promotion Data Emission framework to allow for more automation and better customer matching, a security model overhaul, and an intern-led UI refresh proposal validated by Nike's design team. Concluded with a structured 3-session knowledge transfer series in December 2023, fully onboarding the incoming team with all PRDs, roadmaps, and future plans documented.",
        tags: ["product-management", "team-leadership", "consumer-engagement", "0-1-development"]
      },
      {
        start: "2024",
        end: "2026",
        title: "Lead Product Manager, Digital Payment Services",
        description: "Owned Nike's global payment product lifecycle across Nike.com, Nike App, and SNKRS. Delivered multiple new payment methods and a refresh of existing ones that led to $37M annualized incremental demand globally, including a +71 bps Checkout Success Rate lift validated through A/B testing at 99% confidence. Led geo expansions of Payment Services into Australia and Canada, resolving critical payment blockers in the days before each launch. Managed the implementation of a new Payment Strategy for Elite Nike Athletes across US, Japan, Australia, and Korea. Worked with payment vendors to implement various cost saving programs specifically with Visa and Mastercard. Managed multiple vendors throughout service updates, technical incidents, and the implementation of new payment features. Managed both internal and external stakeholder expectations regarding new payment method demand and the cost-benefit analysis required to prioritize them.",
        tags: ["payments", "vendor-management", "geo-expansion", "fintech", "cost-optimization"]
      }
    ]
  }
];

// ── Tag helpers ──────────────────────────────────────────────

function getAllTags() {
  const counts = {};
  JOBS.forEach(job => {
    job.progressions.forEach(p => {
      p.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
}

function filterByTag(tag) {
  if (!tag) return JOBS;
  return JOBS
    .map(job => ({
      ...job,
      progressions: job.progressions.filter(p => p.tags.includes(tag))
    }))
    .filter(job => job.progressions.length > 0);
}