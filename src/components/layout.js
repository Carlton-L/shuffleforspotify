import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from './seo.js';
import Header from './header.js'


const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) =>  {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <Header />
      {meta.title}
      <main>
      {children}
      </main>
    </>
  )
}

export default Layout