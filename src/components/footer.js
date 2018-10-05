import React from 'react';

import styled from 'styled-components';
import { theme } from '../styles';

const FooterContainer = styled.footer`
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.base};
  text-align: center;
  height: 70px;
  padding: 0 50px;
  margin-top: 30px;
`;

const Footer = () => (
  <FooterContainer>
    <a href="https://brittanychiang.com">Made by Brittany Chiang</a>
  </FooterContainer>
);

export default Footer;
