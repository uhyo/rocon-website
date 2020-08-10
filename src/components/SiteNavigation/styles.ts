import { css } from "linaria";

export const siteNavigationCss = css`
  margin-top: -2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--nc-bg-3);

  & > ul {
    display: flex;
    flex-flow: row wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;

    & > li {
      box-sizing: border-fox;
      flex: 20% 0 0;
      padding-right: 1em;
    }
  }
`;
