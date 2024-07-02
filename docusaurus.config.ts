import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cò Đang Ngủ Chung Với React',
  tagline: 'Website bổ ích và sáng tạo dành cho anh em ai chưa biết Javascript và React',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-js-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cobeo2004', // Usually your GitHub org/user name.
  projectName: 'react-js-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['en', 'vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'React+JS Cùng Cò',
      logo: {
        alt: 'My Site Logo',
        src: 'img/react-icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tài Liệu',
        },
        { to: '/blog', label: 'Blog Nhảm', position: 'left' },
        {
          href: 'https://github.com/cobeo2004',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: "docsVersionDropdown",
        //   position: "right"
        // }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tài Liệu',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/immsimonnnn__/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/profile.php?id=100022930086716',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/xu%C3%A2n-tu%E1%BA%A5n-minh-nguy%E1%BB%85n-7836822b5/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog Nhảm',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cobeo2004',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simon Nguyen, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
