export const config = {
    siteMeta: {
      title: "CATL Blog Hub",
      teamName: "CA Tech Lounge",
      description: "RSS based blog for CATL.",
    },
    siteRoot:
      process.env.NODE_ENV === "production"
        ? "https://catl-blog-hub.vercel.app"
        : "http://localhost:3000",
    headerLinks: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "CATL",
        href: "https://www.cyberagent.co.jp/careers/special/students/tech_lounge/",
      },
      {
        title: "GitHub",
        href: "https://github.com/techyoichiro/catl-blog-hub",
      },
    ],
  };