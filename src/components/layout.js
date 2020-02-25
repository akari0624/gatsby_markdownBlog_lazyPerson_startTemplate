import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'

const Layout = ({ children, pageData }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={siteData => (
      <main>
        <Helmet
          title={pageData.title}
          meta={[
            { name: 'description', content: pageData.description },
            { name: 'keywords', content: pageData.tagsString },
          ]}
        />
        <Header siteTitle={siteData.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagsString: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
}

export default Layout
