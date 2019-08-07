import React from 'react';
import { copyToClipboard } from '@utils';
import styled from 'styled-components';
import { theme, media } from '@styles';
const { colors } = theme;

const ColorsContainer = styled.section`
  text-align: center;
  margin: 0 auto;
  position: relative;
  ${media.tablet`grid-gap: 25px;`};
  ${media.phoneXL`grid-gap: 20px;`};
  ${media.phone`grid-gap: 15px;`};
  h3 {
    color: ${colors.white};
    font-size: 24px;
    margin-bottom: 50px;
  }
`;
const Palette = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 35px);
  grid-gap: 20px;
  justify-content: center;
  ${media.phoneXL`
    grid-template-columns: repeat(7, 30px);
    grid-gap: 15px;
  `};
  ${media.phone`
    grid-template-columns: repeat(7, 25px);
  `};
`;
const ColorLabel = styled.div`
  position: absolute;
  top: -35px;
  left: -20px;
  background-color: ${colors.active};
  color: ${colors.lightGrey};
  font-size: ${theme.fontSizes.base};
  border-radius: 3px;
  padding: 4px 6px;
  transition: ${theme.transition};
  opacity: 0;
  z-index: -1;
`;
const Color = styled.div`
  position: relative;
  transition: ${theme.transition};

  &:hover,
  &:focus {
    transform: translateY(-5px);
    ${ColorLabel} {
      opacity: 1;
      z-index: 1;
    }
  }
`;
const ColorButton = styled.button`
  width: 35px;
  height: 35px;
  padding: 0;
  border-radius: 100%;
  transition: ${theme.transition};
  background-color: ${props => props.color};
  z-index: 2;
  ${media.phoneXL`
    width: 30px;
    height: 30px;
  `};
  ${media.phone`
    width: 25px;
    height: 25px;
  `};
`;

const hexes = [
  '#171c28',
  '#1d2433',
  '#2f3b54',
  '#6679a4',
  '#8695b7',
  '#a2aabc',
  '#d7dce2',
  '#ffcc66',
  '#5ccfe6',
  '#bae67e',
  '#ffae57',
  '#ffd580',
  '#c3a6ff',
  '#ef6b73',
];

const Colors = () => (
  <ColorsContainer>
    <h3>Color Palette</h3>

    <Palette>
      {hexes.map((color, i) => (
        <Color key={i}>
          <ColorLabel>{color}</ColorLabel>
          <ColorButton color={color} onClick={() => copyToClipboard(color)} />
        </Color>
      ))}
    </Palette>
  </ColorsContainer>
);

export default Colors;
