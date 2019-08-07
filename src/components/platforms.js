import React from 'react';
import styled from 'styled-components';
import { theme, media } from '@styles';
const { colors, fontSizes } = theme;
import Sublime from '../images/logos/sublime.png';
import Atom from '../images/logos/atom-green.png';
import VSCode from '../images/logos/vscode-new.png';
import iTerm from '../images/logos/iterm.png';
import Hyper from '../images/logos/hyperterm.png';

const PlatformsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  padding: 50px;
  width: 100%;
  max-width: 1440px;
  margin: 100px auto 200px;
  ${media.tablet`
    padding: 50px 25px;
    margin: 50px auto 100px;
  `};
  ${media.phoneXL`
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;
  `};
`;
const Platform = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.active};
  padding: 30px 20px;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  transition: ${theme.transition};
  ${media.phoneXL`padding: 20px;`};

  &:hover,
  &:focus {
    background-color: ${colors.hover};
    transform: translateY(-5px);
    outline: 0;
  }

  img {
    width: 70px;
    ${media.tablet`width: 50px;`};
  }
`;
const PlatformName = styled.div`
  margin-top: 20px;
  color: ${colors.white};
  font-size: ${fontSizes.base};
  line-height: 1.5;
`;

const platforms = [
  {
    name: 'VS Code',
    url: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
    logo: VSCode,
  },
  {
    name: 'Sublime',
    url: 'https://packagecontrol.io/packages/Halcyon%20Theme',
    logo: Sublime,
  },
  {
    name: 'Atom',
    url: 'https://atom.io/themes/halcyon-syntax',
    logo: Atom,
  },
  {
    name: 'iTerm',
    url: 'https://github.com/bchiang7/halcyon-iterm',
    logo: iTerm,
  },
  {
    name: 'Hyper',
    url: 'https://www.npmjs.com/package/hyper-halcyon-theme',
    logo: Hyper,
  },
];

const Platforms = () => (
  <PlatformsContainer>
    {platforms.map(({ name, url, logo }, i) => (
      <Platform key={i} href={url} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={name} />
        <PlatformName>{name}</PlatformName>
      </Platform>
    ))}
  </PlatformsContainer>
);

Platforms.propTypes = {};

export default Platforms;
