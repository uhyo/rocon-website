import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { ExternalLink } from "~/util/ExternalLink";
import { DocsArticle } from "../DocsArticle";

export const DocsHookUseLocation: React.FC = () => {
  return (
    <DocsArticle>
      <h2>useLocation</h2>

      <CodeBlock>
        {`
useLocation(): Location;
        `}
      </CodeBlock>
      <p>
        The <b>useLocation</b> hook returns a{" "}
        <ExternalLink href="https://github.com/ReactTraining/history/blob/master/docs/api-reference.md#location">
          location
        </ExternalLink>{" "}
        that represents the current location. Every time the current location
        changes, this hook triggers a rerendering and returns a new location
        object.
      </p>
      <DocsNavigator />
    </DocsArticle>
  );
};
