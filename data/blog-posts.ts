export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: Section[];
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
    excerpt:
      "If your business doesn't have a website in 2026, you're invisible to a massive chunk of your potential customers — and you're handing them directly to your competitors.",
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
  },
  {
    slug: "how-much-does-website-cost-india",
    title: "How Much Does a Website Cost in India? (Honest 2026 Breakdown)",
    category: "Pricing & Planning",
    readTime: "5 min",
    date: "February 3, 2026",
    excerpt:
      "One of the most common questions I get from small business owners is: \"How much does a website cost?\" The honest answer is: it depends. But let me give you the real breakdown.",
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
  },
  {
    slug: "nextjs-vs-wordpress-small-business-india",
    title: "Next.js vs WordPress: What's Better for Your Small Business?",
    category: "Tech Advice",
    readTime: "4 min",
    date: "March 10, 2026",
    excerpt:
      "If you've asked a web developer about building your business website, you've probably heard both names. Here's a clear, no-jargon comparison to help you understand which one actually makes sense for you.",
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
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}
