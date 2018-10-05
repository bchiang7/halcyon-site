import React from 'react';

import styled from 'styled-components';
import { theme, media } from '../styles';

import Sublime from '../images/logos/sublime.png';
import Atom from '../images/logos/atom-green.png';
import VSCode from '../images/logos/vscode-new.png';
import iTerm from '../images/logos/iterm.png';
import Hyper from '../images/logos/hyperterm.png';

const PlatformsContainer = styled.div`
  padding: 50px 100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  align-content: center;
  justify-content: center;

  ${media.tablet`padding: 50px 25px;`};
`;
const Platform = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.active};
  height: 200px;
  padding: 30px;
  text-align: center;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${theme.colors.hover};
    transform: translateY(-5px);
  }
`;
const Logo = styled.img`
  width: 90px;
`;
const PlatformName = styled.div`
  margin-top: 15px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.base};
`;

const platforms = [
  {
    name: 'VS Code',
    url: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
    logo: VSCode,
  },
  {
    name: 'Sublime Text',
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
        <Logo src={logo} alt={name} />
        <PlatformName>{name}</PlatformName>
      </Platform>
    ))}
  </PlatformsContainer>
);

Platforms.propTypes = {};

export default Platforms;
