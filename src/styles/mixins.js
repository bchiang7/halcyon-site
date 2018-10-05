import { css } from 'styled-components';
import theme from './theme';

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
      color: ${theme.colors.accent};
    }
  `,

  bgGradient: css`
    background: -webkit-linear-gradient(to bottom, ${theme.colors.active}, ${theme.colors.bg});
    background: linear-gradient(to bottom, ${theme.colors.active}, ${theme.colors.bg});
  `,

  //   tooltip: css`
  // background-color: $color;
  //   &:before {
  //     content: attr(data-hex);
  //   }
  // `,
};

export default mixins;
