import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const fetchPosts = async () => {
  const res = await fetch("http://localhost:8080/wp-json/wp/v2/posts")
  const json = await res.json()
  return json
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const [posts, setPosts] = React.useState([])

  React.useEffect(async () => {
    const postsResponse = await fetchPosts()

    setPosts(postsResponse)
  }, [])

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const formattedDate = new Date(post.modified).toLocaleDateString(
            "en-US"
          )
          return (
            <li key={post.title.rendered}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to="#" itemProp="url">
                      <span itemProp="headline">{post.title.rendered}</span>
                    </Link>
                  </h2>
                  <small>{formattedDate}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      //todo: sanitize this
                      __html: post.content.rendered,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
