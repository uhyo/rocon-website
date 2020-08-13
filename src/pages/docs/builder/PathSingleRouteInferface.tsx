import React from "react";
import { Link } from "rocon/react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { docsBuilderRoutes } from "~/routes";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsBuilderPathSingleRouteInterface: React.FC = () => {
  return (
    <DocsArticle>
      <h2>PathSingleRouteInterface</h2>

      <CodeBlock>
        {`
type PathSingleRouteInterface<
  ActionResult,
  Match
>
        `}
      </CodeBlock>
      <p>
        Object passed to a callback function given to{" "}
        <Link route={docsBuilderRoutes._.path}>PathRouteBuilder#route</Link>.
        This object represents the route newly added by PathRouteBuilder#route.
      </p>

      <h3 id="action">p.action(func)</h3>
      <CodeBlock>{`
action(
  action: ActionType<ActionResult, Match>
): PathSingleRouteInterface<...>
      `}</CodeBlock>
      <p>
        Defines an action for this route. If this method is called inside the
        callback function synchronously, the resulting route of
        PathRouteBuilder#route will have the given action. Returns{" "}
        <code>p</code>.
      </p>

      <CodeBlock>{`
// Create a route for /foo and define an action for it.
const fooRoutes = Rocon.Path()
  .route("foo", (r) => r.action(() => <p>This is foo</p>));
      `}</CodeBlock>

      <h3 id="attach">r.attach(otherBuilder)</h3>
      <CodeBlock>{`
attach: AttachFunction<ActionResult, Match>
      `}</CodeBlock>
      <p>
        Attaches another route builder to this route. If this method is called
        inside the callback function synchronously, <code>otherBuilder</code> is
        attached to the resulting route of PathRouteBuilder#route. Returns{" "}
        <code>otherBuilder</code>.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// Create a Search route buillder for /?foo=value.
const fooSearchRoute = Rocon.Search("foo")
  .action(({ foo }) => <p>The value of foo is {foo}</p>);

// Attach the builder to a route representing /app. 
// As a result, fooSearchRoute becomes a route for /app?foo=value.
const toplevelRoutes = Rocon.Path()
  .route("app", (r) => r.attach(fooSearchRoute));
      `}</CodeBlock>

      <DocsNavigator />
    </DocsArticle>
  );
};
