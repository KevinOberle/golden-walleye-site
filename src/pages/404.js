import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Hero, Container } from "react-bulma-components"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Error" />
    <Hero>
      <Hero.Body>
        <Container>
          <h1 className="title">Page Not Found</h1>
          <p>You just visited a page that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Hero.Body>
    </Hero>
  </Layout>
)

export default NotFoundPage
