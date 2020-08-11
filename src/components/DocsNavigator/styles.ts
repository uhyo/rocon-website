import { css } from "linaria";

export const containerCss = css`
  box-sizing: border-box;
  padding: 0.5em 1em;
  background-color: #eeeeee;

  & > h2 {
    border: none;
    color: #222222;
    font-size: 1em;
    font-variant-caps: small-caps;
  }

  & > h3 {
    border: none;
    padding-left: 14px;
    color: #444444;
    font-size: 0.9em;
  }

  a {
    color: #444444;
  }
`;
