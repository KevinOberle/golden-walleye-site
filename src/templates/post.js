import * as React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  Container,
  Hero,
  Content,
  Tag,
  Icon,
  Form,
} from "react-bulma-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Hero>
        <Hero.Body>
          <Container>
            <div className="block">
              <h1 className="title">{frontmatter.title}</h1>
              <h2 className="subtitle" style={{ display: "inline-flex" }}>
                {frontmatter.date}
              </h2>
              {frontmatter.author && <Tag>{frontmatter.author}</Tag>}
              <div>
                <Form.Field multiline kind="group">
                  {frontmatter.pdfFile && (
                    <Form.Control>
                      <Tag.Group
                        gapless
                        renderAs="a"
                        href={frontmatter.pdfFile.publicURL}
                        className="pdfFile"
                      >
                        <Tag color="info">
                          <Icon>
                            <FontAwesomeIcon icon={faFilePdf} />
                          </Icon>
                        </Tag>
                        <Tag>Download file</Tag>
                      </Tag.Group>
                    </Form.Control>
                  )}
                </Form.Field>
              </div>
            </div>
            <div className="block">
              <Content dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </Container>
        </Hero.Body>
      </Hero>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        author
        slug
        title
        pdfFile {
          publicURL
        }
      }
      html
    }
  }
`
export default PostTemplate
