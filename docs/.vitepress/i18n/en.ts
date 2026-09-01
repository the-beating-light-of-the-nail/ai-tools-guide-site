// English navigation and sidebar data — mirrors the structure of zh.ts
import type { LocaleConfig } from "vitepress";

const sidebar: LocaleConfig["themeConfig"]["sidebar"] = {
  "/workbuddy/": [
    {
      text: "Getting Started",
      items: [
        { text: "Section Overview", link: "/workbuddy/" },
        { text: "Meet WorkBuddy", link: "/workbuddy/01-intro/" },
        { text: "Download, Install, Sign In & Update", link: "/workbuddy/02-install/" },
        { text: "The Main Interface, Tasks & Workspaces", link: "/workbuddy/03-interface/" },
        { text: "Finish Your First Task Fast", link: "/workbuddy/04-first-task/" },
        { text: "Load a Skill You'll Actually Use", link: "/workbuddy/05-skills/" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Experts and Expert Teams", link: "/workbuddy/06-experts/" },
        { text: "Using Connectors", link: "/workbuddy/07-connectors/" },
        { text: "Hooking Up the Mini Program & IM Assistant", link: "/workbuddy/08-im-assistant/" },
        { text: "Connecting External APIs", link: "/workbuddy/09-external-api/" },
        { text: "Automated Tasks", link: "/workbuddy/10-automation/" },
        { text: "Further Reading: Understanding AI Work Systems", link: "/workbuddy/11-ai-work-system/" },
      ],
    },
    {
      text: "Case Studies",
      items: [
        { text: "The Office Big Three: Word, Excel, PowerPoint", link: "/workbuddy/case-office/" },
        { text: "Knowledge Management: Put Your Bookmarks to Work", link: "/workbuddy/case-knowledge/" },
        { text: "Make Investment Analysis a Daily Habit", link: "/workbuddy/case-investment/" },
        { text: "Summon an AI Video Team with One Line", link: "/workbuddy/case-video-team/" },
        { text: "A Content Growth Loop", link: "/workbuddy/case-self-media/" },
      ],
    },
    {
      text: "Advanced",
      items: [
        { text: "Building Skills: Knowledge Distillation", link: "/workbuddy/adv-build-skill/" },
        { text: "Designing Multi-Agent Systems", link: "/workbuddy/adv-multi-agent/" },
        { text: "Reliability of Automated Workflows", link: "/workbuddy/adv-automation-reliability/" },
      ],
    },
    {
      text: "Quick Reference",
      items: [
        { text: "Prompt Templates", link: "/workbuddy/ref-prompt-templates/" },
        { text: "Scenario Cheat Sheet", link: "/workbuddy/ref-scenarios/" },
      ],
    },
  ],
  "/traework/": [
    {
      text: "Getting Started",
      items: [
        { text: "Section Overview", link: "/traework/" },
        { text: "What Is TraeWork", link: "/traework/01-what-is" },
        { text: "Install, Sign In & Three-Device Sync", link: "/traework/02-install" },
        { text: "Your First Task", link: "/traework/03-first-task" },
        { text: "Skills", link: "/traework/04-skills" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Office Assistant: Feishu & WeChat", link: "/traework/05-bot-assistant" },
        { text: "Plugins & Third-Party App Authorization", link: "/traework/06-plugins-integrations" },
        { text: "Scheduled Automation", link: "/traework/07-automated-tasks" },
        { text: "Computer & Browser Control", link: "/traework/08-computer-browser" },
      ],
    },
    {
      text: "Case Studies",
      items: [
        { text: "Build a Presentation-Ready Deck", link: "/traework/case-ppt" },
        { text: "Live Reporting: Dashboards, Weekly Reports & Reviews", link: "/traework/case-report" },
        { text: "A WeChat Official Account-to-Feishu Knowledge Base Pipeline", link: "/traework/case-feishu-pipeline" },
        { text: "Four Everyday Routines in a Chat Window", link: "/traework/case-im-daily" },
      ],
    },
    {
      text: "Advanced",
      items: [
        { text: "Plan, Spec, Goal & Commands", link: "/traework/adv-workflows" },
        { text: "MCP & Cloud Run Environments", link: "/traework/adv-mcp-env" },
        { text: "Models & Credits: Pitfalls to Avoid", link: "/traework/adv-models-credits" },
      ],
    },
    {
      text: "Quick Reference",
      items: [
        { text: "Prompt Templates", link: "/traework/ref-templates" },
        { text: "Scenario Cheat Sheet", link: "/traework/ref-scenarios" },
      ],
    },
  ],
  "/qoderwork/": [
    {
      text: "Getting Started",
      items: [
        { text: "Section Overview", link: "/qoderwork/" },
        { text: "What Is QoderWork", link: "/qoderwork/01-what-is" },
        { text: "Install & Sign In", link: "/qoderwork/02-install" },
        { text: "Your First Task", link: "/qoderwork/03-first-task" },
        { text: "Work Folders", link: "/qoderwork/04-files" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Skills & Expert Kits", link: "/qoderwork/05-skills" },
        { text: "Connectors & MCP", link: "/qoderwork/06-connectors" },
        { text: "IM Channels", link: "/qoderwork/07-im-channels" },
        { text: "Scheduled Tasks", link: "/qoderwork/08-automation" },
      ],
    },
    {
      text: "Case Studies",
      items: [
        { text: "File Organizing & Photo Management", link: "/qoderwork/case-file-organize" },
        { text: "Data Analysis & Research Reports", link: "/qoderwork/case-data-report" },
        { text: "Browser Automation in Practice", link: "/qoderwork/case-browser" },
        { text: "Batch Document Processing & Multimedia", link: "/qoderwork/case-office-docs" },
      ],
    },
    {
      text: "Advanced",
      items: [
        { text: "Computer Control & Voice Input", link: "/qoderwork/adv-computer-use" },
        { text: "Creating Skills Through Conversation", link: "/qoderwork/adv-skill-create" },
        { text: "The Three Workbenches", link: "/qoderwork/adv-workbenches" },
        { text: "Memory, Cost & Security Environments", link: "/qoderwork/adv-memory-cost" },
      ],
    },
    {
      text: "Quick Reference",
      items: [
        { text: "Prompt Templates", link: "/qoderwork/ref-templates" },
        { text: "Scenario Cheat Sheet", link: "/qoderwork/ref-scenarios" },
      ],
    },
  ],
  "/doubaowork/": [
    {
      text: "Getting Started",
      items: [
        { text: "Section Overview", link: "/doubaowork/" },
        { text: "What Is Doubao Work", link: "/doubaowork/01-what-is" },
        { text: "Download, Install & Sign In", link: "/doubaowork/02-install" },
        { text: "The Main Interface, Tasks & Projects", link: "/doubaowork/03-interface" },
        { text: "Your First Task: Up and Running in Five Minutes", link: "/doubaowork/04-first-task" },
        { text: "Connectors: Ship One You Can Verify First", link: "/doubaowork/05-connectors" },
        { text: "Choosing and Using Skills", link: "/doubaowork/06-skills" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Control Your PC from Your Phone", link: "/doubaowork/07-mobile-remote" },
        { text: "API Services vs. Connectors: How to Choose", link: "/doubaowork/08-api-vs-connector" },
        { text: "Scheduled Tasks & News Briefings", link: "/doubaowork/09-automation" },
      ],
    },
    {
      text: "Case Studies · Everyday & Office",
      items: [
        { text: "One Source File, Three Deliverables", link: "/doubaowork/case-office" },
        { text: "The Best Fit Is Still Feishu", link: "/doubaowork/case-feishu" },
        { text: "Decluttering Your Desktop: See the Plan First", link: "/doubaowork/case-desktop" },
        { text: "Life Admin: Draft a Version First", link: "/doubaowork/case-life" },
      ],
    },
    {
      text: "Case Studies · Personal Productivity",
      items: [
        { text: "Prioritizing Your Inbox", link: "/doubaowork/case-inbox" },
        { text: "One Meeting, Followed Through End to End", link: "/doubaowork/case-meeting" },
        { text: "Word: From Proofreading to Delivery", link: "/doubaowork/case-word" },
        { text: "Excel: From Cleanup to Dashboard", link: "/doubaowork/case-excel" },
        { text: "From Quick Research to Formal Report", link: "/doubaowork/case-research" },
        { text: "Automated Daily Reports & To-Do Reminders", link: "/doubaowork/case-daily-report" },
        { text: "Read a Book, Fast", link: "/doubaowork/case-reading" },
        { text: "Present Yourself with a Personal Website", link: "/doubaowork/case-personal-site" },
      ],
    },
    {
      text: "Case Studies · Content Creation",
      items: [
        { text: "Topic Ideas: Trends, Peers & a Content Calendar", link: "/doubaowork/case-topic-selection" },
        { text: "From a Trending Topic to a Finished Article", link: "/doubaowork/case-wechat-article" },
        { text: "One Piece of Content, Versions for Every Platform", link: "/doubaowork/case-multi-platform" },
        { text: "From Long-Form to Script & Storyboard", link: "/doubaowork/case-script-storyboard" },
        { text: "Audio/Video Transcription & Highlight Clips", link: "/doubaowork/case-av-transcription" },
        { text: "Find Your Next Post in the Comments", link: "/doubaowork/case-comments" },
        { text: "A GEO Checkup for Your Personal Brand", link: "/doubaowork/case-geo-checkup" },
        { text: "Turn an Article into Short Videos", link: "/doubaowork/case-viral-to-video" },
      ],
    },
    {
      text: "Case Studies · Knowledge Management",
      items: [
        { text: "From Random Bookmarks to Actually Searchable", link: "/doubaowork/case-bookmarks" },
        { text: "Duplicate Files: Check the Differences First", link: "/doubaowork/case-duplicate-files" },
        { text: "Archive Project Assets in One Place", link: "/doubaowork/case-project-archive" },
        { text: "Turn a Feishu Knowledge Base into a Skill", link: "/doubaowork/case-wiki-to-skill" },
        { text: "Look Up Company Policy in One Line", link: "/doubaowork/case-policy-search" },
        { text: "Re-Sorting 541 Case Examples", link: "/doubaowork/case-prompt-library" },
        { text: "Find the Owner of Stale Knowledge", link: "/doubaowork/case-knowledge-expiry" },
      ],
    },
    {
      text: "Case Studies · E-commerce & Finance",
      items: [
        { text: "From One Raw Photo to a Full Image Set", link: "/doubaowork/case-product-images" },
        { text: "After-Market Review & a Watchlist Daily", link: "/doubaowork/case-market-review" },
        { text: "Earnings Reports: Growth First, Then Quality", link: "/doubaowork/case-earnings-quality" },
        { text: "Researching a Company for the First Time", link: "/doubaowork/case-first-company" },
        { text: "From Screening to Valuation", link: "/doubaowork/case-screening-valuation" },
        { text: "Shareholders, Management & Governance", link: "/doubaowork/case-governance" },
        { text: "Bull-Bear Debates & Auditing Research Reports", link: "/doubaowork/case-bull-bear-audit" },
        { text: "From Candlestick Charts to a Research Review Meeting", link: "/doubaowork/case-kline-review" },
      ],
    },
    {
      text: "Advanced",
      items: [
        { text: "Work Buddy or Work Squad", link: "/doubaowork/adv-buddy-or-squad" },
        { text: "Multi-Agent (Work Squad) in Practice", link: "/doubaowork/adv-multi-agent" },
      ],
    },
    {
      text: "Quick Reference",
      items: [
        { text: "Prompt Templates", link: "/doubaowork/ref-templates" },
        { text: "Scenario Cheat Sheet", link: "/doubaowork/ref-scenarios" },
      ],
    },
  ],
  "/": [
    {
      text: "This Site",
      items: [
        { text: "Home", link: "/" },
        { text: "About & Open-Source Credits", link: "/about" },
      ],
    },
  ],
};

export const en = {
  lang: "en-US",
  title: "AI Work Tutorials",
  titleTemplate: ":title · AI Work Tutorials",
  description:
    "Practical tutorials for the office AI workspaces from Tencent, ByteDance, and Alibaba: WorkBuddy, TraeWork, QoderWork, Doubao Work and other work-style tools for office workers — from download and install to your first task, covering skills, connectors, automation, and remote control over IM.",
  themeConfig: {
    siteTitle: "AI Work Tutorials",
    nav: [
      { text: "Home", link: "/" },
      { text: "WorkBuddy", link: "/workbuddy/" },
      { text: "TraeWork", link: "/traework/" },
      { text: "QoderWork", link: "/qoderwork/" },
      { text: "Doubao Work", link: "/doubaowork/" },
      { text: "About", link: "/about" },
    ],
    sidebar,
    outline: { level: [2, 3], label: "On this page" },
    docFooter: { prev: "Previous", next: "Next" },
    returnToTopLabel: "Back to top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Theme",
    lightModeSwitchTitle: "Switch to light mode",
    darkModeSwitchTitle: "Switch to dark mode",
  },
};
