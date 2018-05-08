module.exports = {
  siteMetadata: {
    title: 'Welcome to travelDev!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'react-icons-kit',
    // 'typography-theme-de-young',
    {       
      resolve: `gatsby-plugin-typography`,       
      options: {         
        pathToConfigModule: `src/utils/typography.js`,       
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      },
    },
  ],
}
