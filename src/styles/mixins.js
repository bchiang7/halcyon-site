import { css } from 'styled-components';
import theme from './theme';
const { colors } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: ${theme.transition};
    cursor: pointer;
    color: inherit;

    &:hover,
    &:active,
    &:focus {
      color: ${colors.accent};
    }
  `,

  bgGradient: css`
    background: -webkit-linear-gradient(to bottom, ${colors.active}, ${colors.bg});
    background: linear-gradient(to bottom, ${colors.active}, ${colors.bg});
  `,
};

export default mixins;
