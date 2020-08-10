import { css } from "linaria";

export const tabContainerCss = css`
  border: 1px solid #aaaaaa;

  & > main {
    padding: 1em;
  }
`;

export const tabListCss = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  & > li {
    flex: 30% 0 0;
    list-style-type: none;
  }
`;

export const tabCss = css`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5ex;
  border-bottom: 0.25ex solid #999999;
  text-align: center;
  text-decoration: none;
  color: #999999;
  font-weight: bold;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const tabSelectedCss = css`
  color: #222222;
  border-color: #222222;
`;
