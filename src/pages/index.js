import React from "react"
import Link from "gatsby-link"
import { get } from "lodash"
import Helmet from "react-helmet"

import '../css/index.scss'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        { posts.map(post => {
          if (post.node.path !== "/404/") {
            const title = get(post, "node.frontmatter.title") || post.node.path

            return (
              <article
                className="Post"
                style={{
                  background: post.node.frontmatter.backgroundColor,
                  color: post.node.frontmatter.color,
                }}
              >
                <div className="Container">
                  <h3 key={ post.node.frontmatter.title }>{ post.node.frontmatter.title }</h3>
                  <h4 key={ post.node.frontmatter.subtitle }>{ post.node.frontmatter.subtitle }</h4>
                  <div dangerouslySetInnerHTML={ { __html: post.node.html } } />
                </div>
              </article>
            )
          }
        }) }
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            subtitle
            backgroundColor
            color
          }
        }
      }
    }
  }
`
