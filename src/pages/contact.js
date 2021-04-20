import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Hero, Container, Content, Box } from "react-bulma-components"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <Hero>
      <Hero.Body>
        <Container>
          <Content>
            <div className="block">
              <h1>Contact Us</h1>
              For all inqueries, please contact the tournament organizer:
            </div>
            <div className="block">
              <Box className="is-inline-block">
                <h2>Ken Sperling</h2>
                <p>
                  <strong>Phone:</strong> 780-751-3906 <br />
                  <strong>Mobile:</strong> 780-523-7385 <br />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:ksperling@explornet.com">
                    ksperling@xplornet.com
                  </a>
                </p>
              </Box>
            </div>
          </Content>
        </Container>
      </Hero.Body>
    </Hero>
  </Layout>
)

export default Contact
