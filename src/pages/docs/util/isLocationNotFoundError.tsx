import React from "react";
import { Link } from "rocon/react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { docsUtilRoutes } from "~/routes";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsUtilIsLocationNotFoundError: React.FC = () => {
  return (
    <DocsArticle>
      <h2>isLocationNotFoundError</h2>

      <CodeBlock>
        {`
isLocationNotFoundError(err: unknown): err is LocationNotFoundError;
        `}
      </CodeBlock>
      <p>
        Returns whether the given object is a{" "}
        <Link route={docsUtilRoutes._.locationNotFoundError}>
          LocationNotFoundError
        </Link>
        .
      </p>

      <DocsNavigator />
    </DocsArticle>
  );
};
