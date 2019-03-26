module.exports = {
  siteMetadata: {
    title: 'Halcyon Theme',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, and more.',
    keywords: 'Halcyon theme, halcyon, theme, dark blue theme, VS Code theme',
    twitterHandle: '@bchiang7',
    siteURL: 'https://halcyon-theme.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#171c28',
        theme_color: '#1d2433',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
  ],
};
