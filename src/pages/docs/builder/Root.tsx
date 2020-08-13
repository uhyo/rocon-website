import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsBuilderRoot: React.FC = () => {
  return (
    <DocsArticle>
      <h2>RootRouteBuilder</h2>

      <CodeBlock>
        {`
type RootRouteBuilder<
  ActionResult,
  WildcardFlag extends WildcardFlagType,
  Match
>
        `}
      </CodeBlock>
      <p>
        The <b>Root</b> route builder is a route builder that defines a route
        with a fixed location. It is useful when your app is deployed to a deep
        location like <code>/path/to/your/app/</code>, in which case you can
        create a Root route builder with path <code>/path/to/your/app</code> and
        attach other routes under it.
      </p>
      <p>
        A Root route builder always holds one route record that represents a
        route with the specified location.
      </p>

      <h3>Initiaization</h3>
      <CodeBlock>{`
Rocon.Root(
  options?: RootRouteBuilderOptions
): RootRouteBuilder<...>

type RootRouteBuilderOptions = {
  root?: Location;
};
`}</CodeBlock>
      <p>
        Creates a new instance of Root route builder. It has one route defined
        from first, but it has no action. To define a route with action, use the{" "}
        <code>action</code> method.
      </p>
      <ul>
        <li>
          <code>root</code>: Location of the route defined by this Root route
          builder. Example:{" "}
          <code>{`{ pathname: "/path/to/your/app", state: null }`}</code>
        </li>
      </ul>

      <h4>Example</h4>
      <CodeBlock>{`
// Define a route for /path/to/your/app/?key=wow
const builder = Rocon.Root({
  root: {
    pathname: "/path/to/your/app",
    search: "?key=wow",
    state: null
  }
});
`}</CodeBlock>

      <h3>builder.action(func)</h3>
      <CodeBlock>{`
action(
  action: ActionType<ActionResult, Match>
): RootRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Returns a new Root route builder whose single route has an action
        associated to it.
      </p>

      <h3>builder.attach(otherBuilder)</h3>
      <CodeBlock>{`
attach: AttachFunction<ActionResult, Match>
      `}</CodeBlock>
      <p>
        Alias of <code>builder.route.attach(otherBuilder)</code>. Attaches{" "}
        <code>otherBuilder</code> to this builder's route and returns{" "}
        <code>otherBuilder</code>.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// Define two routes corresponding to /path/to/your/app/foo and
// /path/to/your/app/bar
const routes = Rocon.Root({
  root: {
    pathname: "/path/to/your/app",
    state: null
  }
}).attach(Rocon.Path())
  .routes({
    foo: {
      action: () => <p>This is foo</p>
    },
    bar: {
      action: () => <p>This is bar</p>
    },
  });
`}</CodeBlock>

      <h3>builder.route</h3>
      <p>The route record defined by this Root route builder.</p>
      <DocsNavigator />
    </DocsArticle>
  );
};
