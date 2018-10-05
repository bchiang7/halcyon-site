module.exports = {
  siteMetadata: {
    title: 'Halcyon',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, and more.',
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
