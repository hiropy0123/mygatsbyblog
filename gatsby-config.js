module.exports = {
  siteMetadata: {
    title: 'Code Log',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Code Log',
        short_name: 'Code Log',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-source-graphcms`,
    //   options: {
    //     endpoint: `https://api-apeast.graphcms.com/v1/cjnp60lw204ac01ijrnuvtbrw/master`,
    //     // token: `graphql_token`,
    //     query: `query content($first: Int, $skip: Int, $where: InfoWhereInput, $orderBy: InfoOrderByInput) {
    //       infoes: infoesConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
    //         edges {
    //           node {
    //             createdAt
    //             updatedAt
    //             status
    //             id
    //             date
    //             headline
    //             detail
    //           }
    //         }
    //       }
    //     }`,
    //   },
    // },
  ],
}
