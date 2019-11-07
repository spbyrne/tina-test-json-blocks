module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: [
          // We'll add some Tinacms plugins in the next step.
        ],
      },
    },
    "gatsby-tinacms-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    "gatsby-transformer-json",
  ],
}
