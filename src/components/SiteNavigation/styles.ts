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
      box-sizing: border-box;
      flex: 20% 0 0;
      min-width: 11rem;
      align-self: center;
      padding: 0 1em;

      &:not(:first-child) {
        border-left: 1px solid var(--nc-bg-3);
      }

      img {
        margin: 0;
        vertical-align: text-bottom;
      }
    }
  }
`;
