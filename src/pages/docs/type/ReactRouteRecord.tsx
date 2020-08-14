import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsTypeReactRouteRecord: React.FC = () => {
  return (
    <DocsArticle>
      <h2>ReactRouteRecord</h2>

      <CodeBlock>
        {`
type ReactRouteRecord<Match>
        `}
      </CodeBlock>
      <p>
        Object that represents one route defined by route builders. A route
        represented by <code>ReactRouteRecord&lt;Match&gt;</code> requires a
        match object of type <code>Match</code>.
      </p>

      <h3 id="action">record.action</h3>
      <CodeBlock>{`
action: ((match: Match) => ReactElement | null) | undefined
      `}</CodeBlock>
      <p>
        Action registered to this route. An action is a function that receives a
        match object and returns a React element.
      </p>

      <h3 id="attach">record.attach</h3>
      <CodeBlock>{`
attach: AttachFunction<ActionResult, Match>
      `}</CodeBlock>
      <p>
        Attaches another route builder to this route and returns that builder.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// Create a Path route builder which defines /foo.
const fooRoutesBuilder = Rocon.Path()
  .route("foo");
// Get the route record for /foo.
const fooRoute: ReactRouteRecord<{}> = fooRoutesBuilder._.foo;

// Attach a Search route builder to define a route for /foo?key=value.
const anotherBuilder = fooRoute.attach(Rocon.Search("key")); 
const fooRoute2: ReactRouteRecord<{ key: string }> =
  anotherBuilder.route;
      `}</CodeBlock>

      <DocsNavigator />
    </DocsArticle>
  );
};
