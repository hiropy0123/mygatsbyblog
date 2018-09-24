import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter

  return (
    <div>
      <Helmet title={`${frontmatter.title} - My Blog`} />
      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </div>
      <Link to="/blog/">ブログ一覧へ戻る</Link>
    </div>
  )
}


export const pageQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
      }
    } 
  }
`

export default Template;

