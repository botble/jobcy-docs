import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/jobcy/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/jobcy/releases' },
      { text: 'Upgrade Guide', link: '/jobcy/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/jobcy/installation' },
      { text: 'SSL', link: '/jobcy/ssl' },
      { text: 'License', link: '/jobcy/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage', link: '/jobcy/usage-homepage' },
      { text: 'Setup logo & favicon', link: '/jobcy/usage-logo-favicon' },
      { text: 'Menu', link: '/jobcy/usage-menu' },
      { text: 'Theme options', link: '/jobcy/usage-theme-options' },
      { text: 'Widgets', link: '/jobcy/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/jobcy/usage-custom-css-js' },
      { text: 'Translation', link: '/jobcy/usage-translation' },
      { text: 'Email', link: '/jobcy/usage-email' },
      { text: 'Multi-language', link: '/jobcy/usage-multi-language' },
      { text: 'Currencies', link: '/jobcy/usage-currencies' },
      { text: 'Media - Setup Amazon S3', link: '/jobcy/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/jobcy/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/jobcy/usage-media-wasabi' },
      { text: 'Analytics', link: '/jobcy/usage-analytics' },
      { text: 'Backup', link: '/jobcy/usage-backup' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[];