const siteMetadata = {
  siteUrl: "https://ph.buzzing.cc",
  author: "Product Hunt",
  locale: "zh",
  title: "Product Hunt 热门",
  shortTitle: "PH热门",
  description: "用中文浏览 Product Hunt 热门App，网站和产品",
  keywords: ["buzzing", "Product Hunt", "热门APP", "发现APP"],
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Product Hunt`,
      url: `https://www.producthunt.com/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Product Hunt`,
      shortTitle: "BuzzPH",
      description: `See what's buzzing on Product Hunt in your native language`,
      keywords: ["Product Hunt", "buzzing", "explore APP"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Product Hunt 熱門",
      shortTitle: "PH熱門",
      description: "用中文瀏覽 Product Hunt 熱門App，網站和產品",
      keywords: ["buzzing", "Product Hunt", "熱門APP", "發現APP"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues",
        },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
