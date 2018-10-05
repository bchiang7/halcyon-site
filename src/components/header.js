import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme } from '../styles';

import Demo from '../images/demo.png';

const HeaderContainer = styled.header`
  padding: 50px 25px;
  text-align: center;
`;
const Title = styled.h1`
  color: ${theme.colors.accent};
  font-size: 70px;
  font-weight: 500;
  background: -webkit-linear-gradient(${theme.colors.yellow}, ${theme.colors.accent});
  background: linear-gradient(${theme.colors.yellow}, ${theme.colors.accent});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Subtitle = styled.h2`
  color: ${theme.colors.lightGrey};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 100px;
`;
const Screenshot = styled.img`
  max-width: 1400px;
`;

const Header = ({ title, description }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Subtitle>{description}</Subtitle>
    <Screenshot src={Demo} alt="screenshot" />
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
