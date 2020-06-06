import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
          <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
        </Helmet>

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <a href="/">Page introuvable ! <br /><br />Retour à l'accueil</a>
          </section>
        </div>

      </div>
    )
  }
}

export default NotFound

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
