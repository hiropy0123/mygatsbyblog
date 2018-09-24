import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark

  return (
    <Layout>
      <h1 style={{fontSize: '32px', textAlign: 'center'}}>Gatsbyブログ</h1>

      {
        posts.map(({node: post}) => {
          const { frontmatter } = post
          return (
            <div key={post.id}>
              <h2>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
            </div>
          )
        })
      }

      <Link to="/">ホームへ戻る</Link>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default BlogPage
