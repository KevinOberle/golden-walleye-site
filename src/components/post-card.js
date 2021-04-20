import * as React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { Card } from "react-bulma-components"

const PostCard = props => {
  const post = props.post.frontmatter
  const image = getImage(post.featuredImage)

  return (
    <Link to={"/" + post.slug}>
      <Card style={{ height: "100%" }}>
        {post.featuredImage && (
          <div className="card-image">
            <GatsbyImage image={image} alt={post.featuredImageAlt} />
          </div>
        )}
        <Card.Content>
          <div className="block">
            <p className="title is-5">{post.title}</p>
            <p className="subtitle is-6">{post.date}</p>
          </div>
          <div className="block">{post.grabberText}</div>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default PostCard
