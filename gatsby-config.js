module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      // include this if custom widgets are needed
      // options: {
      //   modulePath: `${__dirname}/src/cms/cms.js`,
      // },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog-md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/work-md`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
