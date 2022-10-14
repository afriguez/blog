// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blog",
  url: "https://blog.afriguez.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: false,
        docs: false,
        blog: {
          blogTitle: "Fer L. | Personal Blog",
		  blogDescription: "Personal blog - afriguez.com",
		  blogSidebarTitle: "Latest posts",
		  blogSidebarCount: 10,
          routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Avatar",
          src: "https://github.com/afriguez.png",
        },
        items: [
          {
            position: "left",
            href: "https://afriguez.com",
            label: "Portoflio",
          },
          {
            href: "https://github.com/afriguez",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/users/361159575036231691",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/afriguez",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Portfolio",
                href: "https://afriguez.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/afriguez",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} afriguez. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["elixir"],
      },
    }),
};

module.exports = config;
