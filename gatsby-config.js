module.exports = {
  siteMetadata: {
    title: `Sumit Sati`,
    description: `Personal website of Sumit Sati`,
    author: `@Sumit Sati`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              wrapperClassName: 'syntax',
              theme: {
                default: 'Light+ (default light)',
                parentSelector: {
                  '.dark': 'Dark+ (default dark)',
                },
              },
              inlineCode: {
                marker: '^',
                className: 'inline-code',
                theme: {
                  default: 'Light+ (default light)',
                  parentSelector: {
                    '.dark': 'Dark+ (default dark)',
                  },
                }
              }
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `autolink-anchor`,
              elements: [`h2`]
            }
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        excludePaths: ["/", "/about"," /blog", "/uses", { regex: "^/category" }, "/404"],
        height: 2,
        color: `var(--accent)`,
        footerHeight: 0,
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
    `gatsby-remark-smartypants`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
