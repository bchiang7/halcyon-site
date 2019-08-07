import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors } = theme;
import Logo from '../images/logo.png';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.base};
  text-align: center;
  padding: 50px 25px;
  margin-top: 100px;
  img {
    width: 70px;
    margin-bottom: 50px;
  }
  a {
    padding: 10px 15px;
    background-color: ${colors.active};
    color: ${colors.white};
    &:hover,
    &:focus {
      background-color: ${colors.accent};
      color: ${colors.bg};
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <img src={Logo} alt="logo" />
    <a href="https://brittanychiang.com">Made by Brittany Chiang</a>
  </FooterContainer>
);

export default Footer;
