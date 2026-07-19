export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  /** ISO 8601 date (YYYY-MM-DD) for structured data — kept separate from the display `date` string. */
  isoDate: string;
  excerpt: string;
  /** Short, direct answer shown right under the headline — written to be quotable by AI search summaries. */
  quickAnswer: string;
  content: Section[];
  /** Optional Q&A rendered at the end of the post and emitted as FAQPage structured data. */
  faqs?: BlogFaq[];
}

interface Section {
  type: "p" | "h2" | "h3" | "table" | "ul";
  text?: string;
  rows?: string[][];
  headers?: string[];
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-small-business-needs-website-india",
    title: "Why Every Small Business in India Needs a Website in 2026",
    category: "Business Growth",
    readTime: "4 min",
    date: "January 15, 2026",
    isoDate: "2026-01-15",
    excerpt:
      "If your business doesn't have a website in 2026, you're invisible to a massive chunk of your potential customers — and you're handing them directly to your competitors.",
    quickAnswer:
      "Yes — in 2026, a small business without a website is invisible to the 75%+ of Indian customers who research locally online before buying. A basic business website costs around ₹10,000 and can be live in under two weeks.",
    content: [
      {
        type: "p",
        text: "If your business doesn't have a website in 2026, you're invisible to a massive chunk of your potential customers — and you're handing them directly to your competitors.",
      },
      { type: "h2", text: "The Numbers Don't Lie" },
      {
        type: "p",
        text: "India now has over 900 million internet users. More importantly, over 75% of them search for local businesses online before making a purchase decision. Whether someone is looking for a dentist in Pune, a salon in Delhi, or a boutique in Kolkata — they're Googling it first. If you're not there, they'll find someone who is.",
      },
      { type: "h2", text: '"But I Have Instagram"' },
      {
        type: "p",
        text: "Social media is great for discovery. But it's not ownership. Your Instagram page can be restricted, hacked, or penalised by an algorithm change overnight. A website is yours — your address, your content, your customers. More importantly: Instagram doesn't rank on Google. A website does.",
      },
      { type: "h2", text: "What a Website Actually Does for a Small Business" },
      { type: "h3", text: "Builds Trust Instantly" },
      {
        type: "p",
        text: "A clean, professional website signals that you're serious about your business. Customers who land on a well-designed site are significantly more likely to enquire than those who find a messy social media profile or nothing at all.",
      },
      { type: "h3", text: "Works 24/7" },
      {
        type: "p",
        text: "Your shop might close at 9 PM. Your website doesn't. Customers can browse your services, check your prices, read your reviews, and send an enquiry at midnight — and wake up to a lead in your inbox.",
      },
      { type: "h3", text: "Improves Local Search Rankings" },
      {
        type: "p",
        text: "A properly built website with basic SEO means you start appearing when people in your city search for what you offer. This is free, compounding traffic that builds over time.",
      },
      { type: "h3", text: "Gives You a Professional Email" },
      {
        type: "p",
        text: "hello@yourbusiness.com is infinitely more credible than yourbusiness123@gmail.com. It's a small thing that makes a big difference.",
      },
      { type: "h2", text: "How Much Does It Cost?" },
      {
        type: "p",
        text: "Far less than most people assume. A solid business website for an Indian small business starts around ₹10,000 — roughly the cost of one month of Instagram ads. The difference? A website keeps delivering results for years.",
      },
      { type: "h2", text: "The Bottom Line" },
      {
        type: "p",
        text: "In 2026, not having a website isn't a neutral choice — it's an active disadvantage. The good news is that getting one has never been more affordable or faster. Most small business websites can be built and live in under two weeks. If you've been putting it off, this is your sign to stop.",
      },
    ],
    faqs: [
      {
        q: "Do I really need a website if I already have Instagram or Facebook?",
        a: "Social media helps with discovery, but you don't own that platform — algorithms, bans, or outages can cut off access anytime. A website is yours permanently, and unlike Instagram, it can actually rank on Google.",
      },
      {
        q: "How much does a basic business website cost in India?",
        a: "A solid small business website in India typically starts around ₹10,000 — about the cost of one month of Instagram ads, but it keeps working for years instead of days.",
      },
      {
        q: "How long does it take to get a website live?",
        a: "Most small business websites can be built and launched in under two weeks, and simple landing pages can go live in as little as 3–5 days.",
      },
    ],
  },
  {
    slug: "how-much-does-website-cost-india",
    title: "How Much Does a Website Cost in India? (Honest 2026 Breakdown)",
    category: "Pricing & Planning",
    readTime: "5 min",
    date: "February 3, 2026",
    isoDate: "2026-02-03",
    excerpt:
      "One of the most common questions I get from small business owners is: \"How much does a website cost?\" The honest answer is: it depends. But let me give you the real breakdown.",
    quickAnswer:
      "A professional small business website in India typically costs ₹8,000–₹40,000 from a skilled freelancer, with ₹10,000–₹20,000 being the sweet spot for most clinics, salons, and shops. Cheap DIY builders run ₹500–₹2,000/month; agencies charge ₹50,000–₹5,00,000+.",
    content: [
      {
        type: "p",
        text: 'One of the most common questions I get from small business owners is: "How much does a website cost?" The honest answer is: it depends. But let me give you the real breakdown.',
      },
      { type: "h2", text: "Why Prices Vary So Much" },
      {
        type: "p",
        text: "Website pricing in India ranges from ₹2,000 to ₹5,00,000+. That spread exists because \"website\" covers everything from a single-page template to a full custom web application. The key is knowing what you actually need.",
      },
      { type: "h2", text: "The Pricing Tiers" },
      {
        type: "table",
        headers: ["Type", "Price Range", "Best For"],
        rows: [
          ["DIY Website Builder", "₹500–₹2,000/mo", "Absolute beginners with zero budget"],
          ["Cheap Freelancer", "₹3,000–₹8,000", "Simple sites, low expectations"],
          ["Professional Freelancer", "₹8,000–₹40,000", "Small businesses wanting quality"],
          ["Agency", "₹50,000–₹5,00,000+", "Large businesses, enterprise projects"],
        ],
      },
      { type: "h2", text: "What Affects the Cost?" },
      {
        type: "ul",
        items: [
          "Number of pages — A 3-page site costs less than a 10-page one.",
          "Design complexity — A templated design is cheaper than a fully custom design built from scratch.",
          "Functionality — A basic contact form is cheap. A booking system or payment gateway adds significant time.",
          "Content — If you provide your own copy and photos, costs stay down.",
          "Platform choice — WordPress is cheaper to build but has ongoing maintenance costs. Next.js costs more upfront but is faster and cheaper to host long-term.",
        ],
      },
      { type: "h2", text: "What You Get at Each Price Point" },
      {
        type: "ul",
        items: [
          "₹6,000–₹10,000 — A clean landing page or simple business website. Mobile responsive, basic SEO, contact form. Delivered in under a week.",
          "₹10,000–₹25,000 — A full business website with 5–8 pages, custom design, WhatsApp integration, Google Maps, testimonials, and proper on-page SEO.",
          "₹25,000–₹50,000 — A complex website or basic e-commerce store with product listings, cart, and payment integration.",
          "₹50,000+ — Custom web applications, large e-commerce stores, or enterprise-grade projects.",
        ],
      },
      { type: "h2", text: "Hidden Costs to Watch For" },
      {
        type: "ul",
        items: [
          "Domain name: ₹800–₹1,500/year",
          "Hosting: ₹2,000–₹8,000/year (or free on Vercel for static sites)",
          "SSL certificate: Usually free with most hosts today",
          "Maintenance: Budget ₹1,000–₹3,000/month if you want someone to handle updates",
        ],
      },
      { type: "h2", text: "My Honest Recommendation" },
      {
        type: "p",
        text: "For most Indian small businesses — clinics, salons, restaurants, boutiques — a budget of ₹10,000–₹20,000 gets you a website that looks premium, performs well, and does its job. Don't under-invest and get something that embarrasses you. Don't overpay an agency for features you don't need.",
      },
    ],
    faqs: [
      {
        q: "What is the cheapest way to get a website in India?",
        a: "DIY website builders (like Wix or GoDaddy) are the cheapest at ₹500–₹2,000/month, but they come with template limitations, ongoing subscription costs, and weaker performance than a custom-built site.",
      },
      {
        q: "Is a professional freelancer or an agency cheaper?",
        a: "A professional freelancer typically charges ₹8,000–₹40,000 for a small business website — a fraction of agency pricing (₹50,000–₹5,00,000+) — while still delivering custom design and quality comparable to agency work.",
      },
      {
        q: "What ongoing costs should I budget for after my website launches?",
        a: "Budget ₹800–₹1,500/year for a domain, ₹2,000–₹8,000/year for hosting (or free on Vercel for static sites), and ₹1,000–₹3,000/month if you want a developer to handle ongoing updates.",
      },
    ],
  },
  {
    slug: "nextjs-vs-wordpress-small-business-india",
    title: "Next.js vs WordPress: What's Better for Your Small Business?",
    category: "Tech Advice",
    readTime: "4 min",
    date: "March 10, 2026",
    isoDate: "2026-03-10",
    excerpt:
      "If you've asked a web developer about building your business website, you've probably heard both names. Here's a clear, no-jargon comparison to help you understand which one actually makes sense for you.",
    quickAnswer:
      "For most Indian small businesses, Next.js is the better long-term choice — faster, more secure, and free to host on Vercel. WordPress still makes sense if you need to frequently edit content yourself without a developer.",
    content: [
      {
        type: "p",
        text: "If you've asked a web developer about building your business website, you've probably heard both names. Here's a clear, no-jargon comparison to help you understand which one actually makes sense for you.",
      },
      { type: "h2", text: "What Is WordPress?" },
      {
        type: "p",
        text: "WordPress is a content management system (CMS) that powers around 40% of all websites. It's been around since 2003 and has a massive ecosystem of themes, plugins, and developers. You can update content yourself through a visual dashboard — no coding needed.",
      },
      { type: "h2", text: "What Is Next.js?" },
      {
        type: "p",
        text: "Next.js is a modern web development framework built on React. It's used by companies like Netflix, TikTok, and Notion. It produces extremely fast, highly customisable websites — but requires a developer to build and maintain.",
      },
      { type: "h2", text: "The Honest Comparison" },
      {
        type: "table",
        headers: ["Factor", "WordPress", "Next.js"],
        rows: [
          ["Speed", "Moderate (depends on plugins)", "Very fast"],
          ["Security", "More vulnerable (common target)", "Much more secure"],
          ["Customisation", "Limited by themes/plugins", "Unlimited"],
          ["Self-editing", "Easy (built-in CMS)", "Needs setup"],
          ["Hosting cost", "₹2,000–₹8,000/year", "Free on Vercel"],
          ["Maintenance", "Ongoing (plugin updates)", "Low"],
          ["Developer cost", "Lower upfront", "Slightly higher"],
        ],
      },
      { type: "h2", text: "When WordPress Makes Sense" },
      {
        type: "ul",
        items: [
          "You want to update blog posts and page content yourself, frequently",
          "You have a very limited budget and need something functional fast",
          "You're running a content-heavy site (news, blog, magazine)",
        ],
      },
      { type: "h2", text: "When Next.js Makes Sense" },
      {
        type: "ul",
        items: [
          "You want the fastest, most performant website possible",
          "Security is important (clinics, legal firms, financial businesses)",
          "You want a unique, custom design that doesn't look like every other WordPress site",
          "You're running Google Ads and need a fast landing page (speed = lower CPC)",
          "You want free hosting and minimal ongoing maintenance",
        ],
      },
      { type: "h2", text: "My Recommendation for Indian Small Businesses" },
      {
        type: "p",
        text: "For most small businesses — salons, clinics, restaurants, boutiques — Next.js is the better long-term choice. It's faster, more secure, cheaper to host, and produces a more unique result. The slightly higher upfront cost pays for itself quickly.",
      },
      {
        type: "p",
        text: "WordPress makes sense if you genuinely need to update your own content regularly and don't want to involve a developer for every change. In that case, a well-built WordPress site with minimal plugins is still a solid option.",
      },
      {
        type: "p",
        text: "The worst choice? A bloated WordPress site stuffed with cheap plugins that loads slowly, gets hacked, and needs constant maintenance. Unfortunately, that's what a lot of cheap freelancers deliver.",
      },
    ],
    faqs: [
      {
        q: "Is Next.js better than WordPress for a small business?",
        a: "For speed, security, and hosting cost, yes — Next.js is generally better. WordPress wins only if you need to self-edit content frequently through a visual dashboard without involving a developer.",
      },
      {
        q: "Can I update a Next.js website myself without a developer?",
        a: "Not out of the box — Next.js sites need a developer for content changes unless a CMS (like Sanity) is built in from the start. WordPress has a built-in visual editor that non-technical users can use directly.",
      },
      {
        q: "Which is cheaper to host, Next.js or WordPress?",
        a: "Next.js is usually cheaper — static and small dynamic sites can be hosted free on Vercel. WordPress requires paid hosting, typically ₹2,000–₹8,000 per year, plus ongoing plugin maintenance.",
      },
    ],
  },
  {
    slug: "best-website-designer-in-pune",
    title: "Best Website Designer in Pune (2026): A No-BS Buyer's Checklist",
    category: "Hiring Guide",
    readTime: "6 min",
    date: "July 15, 2026",
    isoDate: "2026-07-15",
    excerpt:
      "\"Who's the best website designer in Pune?\" is the wrong question to Google — it doesn't have a single right answer. But there is a reliable checklist for finding the right one for your business, and that's what this guide covers.",
    quickAnswer:
      "The best website designer for a small business in Pune isn't necessarily the cheapest or the most well-known — it's whoever gives you a real portfolio, transparent upfront pricing, a realistic timeline, and direct access to the person building your site. Growthentic (Baner, Pune) is built around exactly those four things.",
    content: [
      {
        type: "p",
        text: "\"Who's the best website designer in Pune?\" is the wrong question to Google — it doesn't have a single right answer. But there is a reliable checklist for finding the right one for your business, and that's what this guide covers.",
      },
      { type: "h2", text: "Why 'Best' Is the Wrong Question to Start With" },
      {
        type: "p",
        text: "Every web designer's website claims to be the best — including this one. That claim is worthless on its own. What actually matters is whether a specific designer can show you real client work, quote you a fair price upfront, and stay reachable when something breaks after launch. Judge on those, not on marketing copy.",
      },
      { type: "h2", text: "The Checklist: 8 Things to Check Before You Hire Anyone" },
      {
        type: "ul",
        items: [
          "Real, live portfolio — Ask for links to actual client websites, not just mockups or screenshots. Open them on your phone and check if they're fast and look right.",
          "Direct access to the builder — With a freelancer, you talk to the person writing the code. With most agencies, you talk to an account manager relaying messages. Direct access means faster fixes and fewer miscommunications.",
          "Transparent, upfront pricing — A fixed quote before work starts, not a vague \"let's discuss\" or pricing that grows after you've committed.",
          "A realistic timeline in writing — 7–14 days for a business website is realistic. A 24-hour turnaround promise for a full site is a warning sign, not a selling point.",
          "Modern, fast tech — Ask what the site is built on. An outdated stack or a bloated page builder will load slowly and rank worse on Google.",
          "Clear post-launch terms — Know exactly what happens after launch: is there a support window? What does a change cost afterward? Get this in writing before you pay.",
          "Ownership of your own domain and hosting — Your domain and hosting account should be registered in your name, not the designer's. If they hold the keys, you're stuck if the relationship ends.",
          "Reviews or references you can actually verify — Google reviews, a WhatsApp intro to a past client, or a quick reference call are worth more than testimonials pasted on a website.",
        ],
      },
      { type: "h2", text: "Red Flags That Should Make You Walk Away" },
      {
        type: "table",
        headers: ["Red Flag", "Why It Matters"],
        rows: [
          ["No live client sites to show", "If a designer can't point you to real, working websites, you have no way to judge their actual quality."],
          ["Pricing that keeps changing", "Vague quotes almost always grow once you're committed and less able to walk away."],
          ["No written scope or timeline", "Without this, \"redesign in progress\" can drag on for months with no accountability."],
          ["They hold your domain/hosting login", "This gives the designer leverage over your business — never a good position to be in."],
          ["Pressure to decide immediately", "Rushed decisions on a multi-year asset like your website rarely work out well."],
        ],
      },
      { type: "h2", text: "What This Looks Like in Practice (Using Growthentic as an Example)" },
      {
        type: "p",
        text: "To make this concrete rather than abstract: Growthentic is a Pune-based (Baner) freelance studio built around this exact checklist. Every quote is fixed and shared before work starts. Most business websites are delivered in 7–14 days, built on modern Next.js/React rather than bloated page builders. You deal directly with the developer over WhatsApp — not a support ticket queue. Domain and hosting are set up in your name. And you can see real, live client work — Smile Care Studio and Velour Studios are both public, working sites, not mockups.",
      },
      { type: "h2", text: "The Bottom Line" },
      {
        type: "p",
        text: "The \"best\" website designer in Pune isn't a fixed answer — it's whoever passes this checklist for your specific business and budget. Use it on any designer you're considering, including us. If they can't tick most of these boxes, keep looking.",
      },
    ],
    faqs: [
      {
        q: "What should I look for in a website designer in Pune?",
        a: "Look for a real, verifiable portfolio of live client sites, direct access to the person building your site, a fixed price quoted upfront, a realistic delivery timeline, and clear terms for what happens after launch.",
      },
      {
        q: "Is it better to hire a freelancer or an agency in Pune?",
        a: "For most small businesses, a freelancer is the better choice — you deal directly with the person building your site rather than an account manager, which usually means faster turnaround and lower cost for comparable quality.",
      },
      {
        q: "How do I know if a website designer's pricing is fair?",
        a: "Compare their fixed quote against the typical Indian market range — ₹6,000–₹30,000 for most small business sites — and be wary of quotes that are vague, unusually low, or likely to increase after you commit.",
      },
      {
        q: "Should I own my own domain and hosting account?",
        a: "Yes, always. Your domain and hosting should be registered in your name, not the designer's. If they hold the login, you lose control of your own website if the relationship ends.",
      },
    ],
  },
  {
    slug: "freelancer-vs-agency-website-india",
    title: "Freelancer vs. Agency in India: Which Should You Hire for Your Website?",
    category: "Hiring Guide",
    readTime: "6 min",
    date: "July 29, 2026",
    isoDate: "2026-07-29",
    excerpt:
      "The moment you decide to get a website built, someone tells you to 'just hire an agency,' and someone else tells you 'freelancers are cheaper and just as good.' Both are half right. Here's an honest, no-agenda breakdown of when each one actually makes sense.",
    quickAnswer:
      "For most small businesses, a freelance web developer is the better choice — typically ₹8,000–₹40,000 versus an agency's ₹50,000–₹5,00,000+, with direct access to the person building your site instead of an account manager. Agencies make more sense for large, multi-person projects with compliance or vendor requirements.",
    content: [
      {
        type: "p",
        text: "The moment you decide to get a website built, someone tells you to \"just hire an agency,\" and someone else tells you \"freelancers are cheaper and just as good.\" Both are half right. Here's an honest, no-agenda breakdown of when each one actually makes sense.",
      },
      { type: "h2", text: "What You're Actually Paying For" },
      {
        type: "p",
        text: "An agency's price includes more than the website — it covers account managers, sales staff, office overhead, and a profit margin layered on top of the developer's time. A freelancer's price is mostly just the work itself. Neither is a scam; they're just different cost structures built for different kinds of projects.",
      },
      { type: "h2", text: "The Honest Comparison" },
      {
        type: "table",
        headers: ["Factor", "Freelancer", "Agency"],
        rows: [
          ["Typical cost (business website)", "₹8,000–₹40,000", "₹50,000–₹5,00,000+"],
          ["Who you talk to", "The person building your site", "An account manager relaying your requests"],
          ["Turnaround", "Usually faster — fewer approval layers", "Slower — more internal handoffs"],
          ["Availability if issues arise", "Direct WhatsApp or call access", "Support ticket or account manager queue"],
          ["Best for", "Small businesses, single owner-operators", "Large teams, enterprise compliance needs"],
          ["Risk if they disappear", "Single point of failure — vet carefully", "Lower — team continuity"],
        ],
      },
      { type: "h2", text: "When an Agency Is Actually the Right Call" },
      {
        type: "ul",
        items: [
          "You need multiple specialists working simultaneously — designers, developers, and project managers — on a genuinely large, multi-part project.",
          "Your company requires formal vendor contracts, compliance paperwork, or invoicing processes that only a registered agency can provide.",
          "You need guaranteed continuity even if one specific person on the team leaves mid-project.",
        ],
      },
      { type: "h2", text: "When a Freelancer Is the Right Call (Most Small Businesses)" },
      {
        type: "ul",
        items: [
          "You're a single business owner who needs a clean, professional website — not an enterprise platform.",
          "You want direct access to whoever is actually building your site, not a relayed message through an account manager.",
          "Budget matters, and you'd rather pay for the work itself than for agency overhead.",
          "You want a faster turnaround — fewer people means fewer approval bottlenecks.",
        ],
      },
      { type: "h2", text: "The Risk Nobody Mentions About Freelancers — And How to Manage It" },
      {
        type: "p",
        text: "The honest downside of hiring a freelancer is that they're a single point of failure — if they disappear mid-project, there's no team to fall back on. The fix isn't to avoid freelancers; it's to vet them properly: check for a real, live portfolio, insist on a written scope and timeline, and pay in milestones (for example 50% upfront, 50% on delivery) rather than the full amount upfront. That structure protects you either way.",
      },
      { type: "h2", text: "The Bottom Line" },
      {
        type: "p",
        text: "For the vast majority of clinics, salons, restaurants, and small shops in India, a skilled freelancer delivers the same quality as an agency at a fraction of the cost, with faster communication. Agencies earn their higher price tag on large, complex projects that genuinely need a team. Match the hire to the size of the job, not the size of the fear.",
      },
    ],
    faqs: [
      {
        q: "Is a freelancer riskier to hire than an agency?",
        a: "Somewhat — a freelancer is a single point of failure, while an agency has team continuity. You manage that risk by checking a real portfolio, getting a written timeline, and paying in milestones rather than fully upfront.",
      },
      {
        q: "Do freelancers deliver the same quality as agencies?",
        a: "A skilled freelancer can deliver comparable or better quality than an agency for small business websites, since you're working directly with the person doing the actual design and development rather than through relayed requirements.",
      },
      {
        q: "How much cheaper is a freelancer than an agency in India?",
        a: "A professional freelancer typically charges ₹8,000–₹40,000 for a small business website, compared to ₹50,000–₹5,00,000+ from an agency — often for comparable quality on a project of this size.",
      },
      {
        q: "What should I do to protect myself when hiring a freelancer?",
        a: "Ask for a real, verifiable portfolio of live sites, get the scope and timeline in writing, and pay in milestones (such as 50% upfront, 50% on delivery) instead of paying the full amount before work starts.",
      },
    ],
  },
  {
    slug: "questions-to-ask-before-hiring-web-designer",
    title: "10 Questions to Ask Before Hiring a Web Designer in India",
    category: "Hiring Guide",
    readTime: "6 min",
    date: "August 12, 2026",
    isoDate: "2026-08-12",
    excerpt:
      "Most people evaluate a website designer on price alone — then get burned by scope creep, missed deadlines, or a site they can't update later. Asking the right questions upfront avoids all of that. Here are the 10 to ask before you pay anyone a rupee.",
    quickAnswer:
      "Before hiring any web designer, ask to see live client sites, get an itemized price, confirm a realistic timeline, and make sure you'll own your domain, hosting, and source code. A trustworthy designer answers all of these clearly and immediately — hesitation on any of them is a red flag.",
    content: [
      {
        type: "p",
        text: "Most people evaluate a website designer on price alone — then get burned by scope creep, missed deadlines, or a site they can't update later. Asking the right questions upfront avoids all of that. Here are the 10 to ask before you pay anyone a rupee.",
      },
      { type: "h3", text: "1. Can I see 2–3 live websites you've actually built?" },
      {
        type: "p",
        text: "A good answer gives you working links you can open right now on your phone. A bad answer offers only screenshots, mockups, or \"I'll send some examples later.\"",
      },
      { type: "h3", text: "2. What exactly is included in this price?" },
      {
        type: "p",
        text: "A good answer is an itemized list — number of pages, specific features, how many rounds of revisions. A bad answer is a vague \"everything you need\" with no specifics.",
      },
      { type: "h3", text: "3. What's the realistic timeline, and what could delay it?" },
      {
        type: "p",
        text: "A good answer gives a specific range with honest caveats — for example, \"7–10 days, assuming you send content by day 2.\" A bad answer is an unrealistically fast promise with no conditions attached.",
      },
      { type: "h3", text: "4. Who do I contact if something breaks after launch?" },
      {
        type: "p",
        text: "A good answer names a real person and a direct contact method — usually a WhatsApp number or phone call. A bad answer points you to a generic support email with no response-time commitment.",
      },
      { type: "h3", text: "5. Will I own my domain, hosting, and source code?" },
      {
        type: "p",
        text: "A good answer is an immediate \"yes, registered in your name.\" Hesitation, or an offer to \"manage it for you\" with no option to transfer ownership, is a serious red flag.",
      },
      { type: "h3", text: "6. What happens if I want to switch developers later?" },
      {
        type: "p",
        text: "A good answer is a straightforward explanation of how handover works — exporting code, transferring accounts. Defensiveness or refusal to discuss this suggests they intend to make it difficult on purpose.",
      },
      { type: "h3", text: "7. Can I update the content myself, or do I need you for every change?" },
      {
        type: "p",
        text: "This isn't a trick question — either answer can be fine, but you need to know which one you're getting. A CMS-backed site lets you edit yourself; a static site is faster and cheaper but needs a developer for text or image changes.",
      },
      { type: "h3", text: "8. What's your payment structure?" },
      {
        type: "p",
        text: "A good answer is milestone-based — commonly 50% upfront, 50% on delivery. Be cautious of anyone asking for full payment before any work begins, with no milestones in between.",
      },
      { type: "h3", text: "9. How will you handle SEO and mobile responsiveness?" },
      {
        type: "p",
        text: "A good answer is specific — proper meta tags, fast load times, mobile-first layout, Core Web Vitals. A bad answer is a generic \"yes, we do SEO\" with no detail behind it.",
      },
      { type: "h3", text: "10. Can you share a reference I can actually contact?" },
      {
        type: "p",
        text: "A good answer is a willingness to connect you with a past client directly. A bad answer offers only pre-written testimonials pasted on their own website, which are impossible to verify.",
      },
      { type: "h2", text: "The Bottom Line" },
      {
        type: "p",
        text: "None of these questions are unreasonable to ask, and any designer worth hiring will answer them without hesitation. If someone gets defensive or evasive on more than one of these, treat that as your answer — and keep looking.",
      },
    ],
    faqs: [
      {
        q: "What's the most important question to ask a web designer before hiring them?",
        a: "Whether you can see 2–3 live websites they've actually built. A real, working portfolio is the single fastest way to judge quality and honesty before committing any money.",
      },
      {
        q: "Should I pay a web designer in full upfront?",
        a: "No. A milestone-based structure — commonly 50% upfront and 50% on delivery — protects both sides and is standard practice for legitimate freelancers and agencies in India.",
      },
      {
        q: "How do I make sure I own my own website after it's built?",
        a: "Confirm before you pay that your domain and hosting account will be registered in your name, and ask explicitly whether you'll receive full source code ownership after final payment.",
      },
      {
        q: "What if a web designer refuses to answer these questions?",
        a: "Treat that as a red flag and consider other options. A trustworthy designer will answer questions about portfolio, pricing, ownership, and timelines clearly and without hesitation.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}
