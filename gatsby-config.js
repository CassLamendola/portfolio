module.exports = {
  siteMetadata: {
    title: 'My portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
  
}
