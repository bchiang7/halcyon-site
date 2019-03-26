import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Head from './head';
import Header from './header';
import Footer from './footer';

import styled from 'styled-components';
import { GlobalStyle } from '../styles';

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
            keywords
            twitterHandle
            siteURL
          }
        }
      }
    `}
    render={({ site }) => (
      <Site>
        <Head metadata={site.siteMetadata} />

        <GlobalStyle />

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
