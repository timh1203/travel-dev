require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: 'gatsby-source-youtube',
      options: {
        channelId: 'UCUCXUCn0PEPrp7nAIFpFbOw',
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 50 // Defaults to 50
      },
    },
  ],
}
