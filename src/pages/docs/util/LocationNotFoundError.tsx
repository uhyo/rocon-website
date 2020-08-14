import React from "react";
import { Link } from "rocon/react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { docsHookRoutes, docsUtilRoutes } from "~/routes";
import { CodeBlock } from "~/util/CodeBlock";
import { ExternalLink } from "~/util/ExternalLink";
import { DocsArticle } from "../DocsArticle";

export const DocsUtilLocationNotFoundError: React.FC = () => {
  return (
    <DocsArticle>
      <h2>LocationNotFoundError</h2>

      <CodeBlock>
        {`
class LocationNotFoundError extends Error {}
        `}
      </CodeBlock>
      <p>
        Error object that is thrown by{" "}
        <Link route={docsHookRoutes._.useRoutes}>useRoutes</Link> when the
        current location does not match any route in the given route builder.
      </p>
      <p>
        It is recommended to catch this error with an{" "}
        <ExternalLink href="https://reactjs.org/docs/error-boundaries.html">
          error boundary
        </ExternalLink>
        . For determining whether a catched error is a LocationNotFoundError,
        the{" "}
        <Link route={docsUtilRoutes._.isLocationNotFoundError}>
          isLocationNotFoundError
        </Link>{" "}
        util is useful.
      </p>

      <DocsNavigator />
    </DocsArticle>
  );
};
