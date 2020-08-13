import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsHookUseRoutes: React.FC = () => {
  return (
    <DocsArticle>
      <h2>useRoutes</h2>

      <CodeBlock>
        {`
useRoutes(builder: ReactRouteBuilder): ReactElement | null;
        `}
      </CodeBlock>
      <p>
        The <b>useRoutes</b> hook resolves the given route builder against
        current location and returns the result of running the action of
        resolving route.
      </p>
      <p>
        If no route exists that matches the current location, a{" "}
        <code>LocationNotFoundError</code> is thrown.
      </p>

      <h3>Example</h3>
      <CodeBlock>{`
const builder = Rocon.Path()
  .routes({
    foo: {
      action: () => <p>This is foo</p>
    },
    bar: {
      action: () => <p>This is bar</p>
    }
  });

const App: React.FC = () => {
  return useRoutes(builder);
};
`}</CodeBlock>
      <p>
        The <code>App</code> component renders <code>This is foo</code> if
        current URL is <code>/foo</code>. It renders <code>This is bar</code> if
        current URL is <code>/bar</code>.
      </p>
      <DocsNavigator />
    </DocsArticle>
  );
};
