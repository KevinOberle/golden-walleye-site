import * as React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import "react-bulma-components/dist/react-bulma-components.min.css"
import "./layout.sass"
import {
  Navbar,
  Footer,
  Container,
  Content,
  Hero,
  Heading,
} from "react-bulma-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `)

  const [HamburgerOpen, setHamburgerOpen] = React.useState(false)
  const toggleHamburger = () => setHamburgerOpen(!HamburgerOpen)

  //data.site.siteMetadata?.title || `Title`
  return (
    <>
      <Hero
        color="dark"
        size="large"
        className="header is-clipped has-BG-Image"
      >
        <StaticImage
          src="../images/sunrise-over-boat.JPG"
          alt="Boat leaving marina under sunrise"
          className="is-overlay"
          style={{ position: "absolute" }}
          loading="eager"
          layout="constrained"
        />

        <Hero.Body>
          <Container>
            <Heading size={3}>{data.site.siteMetadata?.title}</Heading>
            <Heading subtitle size={4}>
              {data.site.siteMetadata?.subTitle}
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Navbar active={HamburgerOpen} color="dark">
        <Container>
          <Navbar.Brand>
            <Navbar.Burger onClick={toggleHamburger} />
          </Navbar.Brand>

          <Navbar.Menu>
            <Navbar.Container position="start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/contact/">
                Contact
              </Link>
            </Navbar.Container>
          </Navbar.Menu>
        </Container>
      </Navbar>

      {children}
      <Footer className="has-text-white-ter has-background-dark" size="small">
        <Container>
          <Content style={{ textAlign: "center" }}>
            Kevin Oberle © {new Date().getFullYear()}
          </Content>
        </Container>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
