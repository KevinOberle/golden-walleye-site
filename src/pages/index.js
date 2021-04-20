import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/post-card.js"

import { useStaticQuery, graphql } from "gatsby"
import { Hero, Container, Columns } from "react-bulma-components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PostCardQuery {
      allMarkdownRemark(
        filter: { frontmatter: { postOnHome: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            author
            slug
            title
            postOnHome
            grabberText
            featuredImage {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.77777777778, layout: CONSTRAINED)
              }
            }
            featuredImageAlt
            pdfFile {
              publicURL
            }
          }
          html
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <Hero>
        <Hero.Body>
          <Container multiline>
            <Columns>
              {posts.map(post => (
                <Columns.Column size="one-third" key={post.frontmatter.slug}>
                  <PostCard post={post} />
                </Columns.Column>
              ))}
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    </Layout>
  )
}

export default IndexPage
