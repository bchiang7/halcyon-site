import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ogImage from '../images/og.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link
      rel="icon"
      type="image/png"
      href="https://raw.githubusercontent.com/bchiang7/halcyon-vscode/master/images/logo.png"
      hrefLang="en-us"
    />
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content="" />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteURL} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${metadata.siteURL}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${metadata.siteURL}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteURL} />
    <meta name="twitter:site" content={metadata.twitterHandle} />
    <meta name="twitter:creator" content={metadata.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${metadata.siteURL}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/tonsky/FiraCode/1.206/distr/fira_code.css"
    />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
