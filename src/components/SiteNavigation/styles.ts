import { css } from "linaria";

export const siteNavigationCss = css`
  margin-top: -2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--nc-bg-3);

  & > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
