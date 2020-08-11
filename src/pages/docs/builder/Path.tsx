import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsBuilderPath: React.FC = () => {
  return (
    <DocsArticle>
      <h2>PathRouteBuilder</h2>

      <CodeBlock>
        {`
type PathRouteBuilder<
  ActionResult,
  Defs extends RoutesDefinition<ActionResult>,
  AnyFlag extends WildcardFlagType,
  ExactFlag extends WildcardFlagType,
  Match
>
        `}
      </CodeBlock>
      <p>
        The <b>Path</b> route builder is a route builder that defines one level
        of pathname segments.
      </p>

      <h3>Initiaization</h3>
      <CodeBlock>Rocon.Path()</CodeBlock>

      <h3>builder.route(key, callback?)</h3>
      <CodeBlock>{`
route<Key extends string>(
  key: string,
  callback?: (route: PathSingleRouteInterface<...>) => void
): PathRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Returns a new Path route builder with a new route for <code>key</code>{" "}
        added. By providing a <code>callback</code> function, one can add an
        action or attach another route builder to the newly added route.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// create a Path route builder with /foo and /bar 
const foobarRoutes = Path.init()
  .route("foo", (r) => r.action(()=> <p>I am foo</p>))
  .route("bar", (r) => r.action(()=> <p>I am bar</p>));
      `}</CodeBlock>

      <h3>builder.routes(defs)</h3>
      <CodeBlock>{`
routes<D extends RoutesDefinition<ActionResult>>(
  defs: D
): PathRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Adds multiple routes at once. Actions can be specified for each route.
        Each key of given object becomes a route key.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// create a Path route builder with /foo and /bar 
const foobarRoutes = Path.init()
  .routes({
    foo: {
      action: ()=> <p>I am foo</p>
    },
    bar: {
      action: ()=> <p>I am bar</p>
    },
  });
      `}</CodeBlock>

      <h3>builder.exact(routeDefinition)</h3>
      <CodeBlock>{`
exact<RD extends RouteDefinition<...>>(
  routeDefinition: RD
): PathRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Returns a new Path route builder with an <b>exact route</b> (route for{" "}
        <code>/</code>) added.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// create a Path route builder with / and /foo 
const fooRoutes = Path.init()
  .exact({
    action: () => <p>I am root</p>
  })
  .route("foo", (r) => r.action(()=> <p>I am foo</p>))
      `}</CodeBlock>

      <h3>builder.any(routeDefinition)</h3>
      <CodeBlock>{`
any<Key extends string, RD extends RouteDefinition<...>>(
  key: Key,
  routeDefinition: RD
): PathRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Returns a new Path route builder with an <b>any route</b> (route that
        catches all paths expect explicitly define ones) added.
        <code>key</code> is a match object key with type <code>string</code>
        whose content is the path segment catched by this route.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// Create a Path route builder that catches any path.
// By accessing /foobar you see "You visited /foobar"
const catchAllRoutes = Path.init()
  .any("pathId", {
    action: ({ pathId }) => <p>You visited /{pathId} </p>
  })
      `}</CodeBlock>

      <h3>builder._</h3>
      <p>
        The collection of all named route records defined in this Path route
        builder.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
const foobarRoutes = Path.init()
  .routes({
    foo: {
      action: ()=> <p>I am foo</p>
    },
    bar: {
      action: ()=> <p>I am bar</p>
    },
  });

console.log(foobarRoutes._.foo);
foobarRoutes._.bar.attach(...);
      `}</CodeBlock>

      <h3>builder.exactRoute</h3>
      <p>
        Route record for an exact route defined in this route.
        <code>undefined</code> if no exact route is defined.
      </p>

      <h3>builder.anyRoute</h3>
      <p>
        Route record for an any route defined in this route.
        <code>undefined</code> if no any route is defined.
      </p>
      <DocsNavigator />
    </DocsArticle>
  );
};
