import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

import '../styles/base';
import styled from 'styled-components';

import ogImage from '../images/og.png';

const Site = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({ site }) => (
      <Site>
        <Helmet>
          <html lang="en" />
          <title>{site.siteMetadata.title}</title>
          <link
            rel="icon"
            type="image/png"
            href="https://raw.githubusercontent.com/bchiang7/halcyon-vscode/master/images/logo.png"
            hrefLang="en-us"
          />
          <meta name="description" content={site.siteMetadata.description} />
          <meta name="keywords" content="halcyon, halcyon theme, dark theme, ayu mirage" />
          <meta property="og:title" content={site.siteMetadata.title} />
          <meta property="og:description" content={site.siteMetadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={site.siteMetadata.title} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bchiang7" />
          <meta name="twitter:creator" content="@bchiang7" />
          <meta name="twitter:title" content={site.siteMetadata.title} />
          <meta name="twitter:description" content={site.siteMetadata.description} />
          <meta name="twitter:image:src" content={ogImage} />
          <meta name="twitter:image:alt" content={site.siteMetadata.title} />
        </Helmet>
        <Header title={site.siteMetadata.title} description={site.siteMetadata.description} />
        <main>{children}</main>
        <Footer />
      </Site>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
