import React from "react";
import { Link } from "rocon/lib/react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { docsBuilderRoutes, docsHookRoutes, docsTypeRoutes } from "~/routes";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "./DocsArticle";

export const DocsConcepts: React.FC = () => {
  return (
    <DocsArticle>
      <h2>Rocon Concepts</h2>
      <p>
        Rocon is a router library with ultimate type safety. In order to
        understand Rocon, it is important to understand how you define routes
        with Rocon.
      </p>
      <p>
        Core concepts of Rocon includes <b>route builders</b>,{" "}
        <b>route records</b> and <b>match objects</b>. This page explains these
        concepts.
      </p>

      <h3 id="route-builders">Route Builders</h3>
      <p>
        In Rocon, you need to define routes first in order to render contents in
        response to certain URLs. Routes are defined using <b>route builders</b>
        .
      </p>
      <p>
        Each builder represents a simple constituent of a URL. To build routes
        that represent complex URLs, you need to compose multiple builders by
        attaching one to another. For example, one{" "}
        <Link route={docsBuilderRoutes._.path}>Path route builder</Link>{" "}
        represents a single segment of pathnames (like <code>/foo</code> or{" "}
        <code>/bar</code>). To construct a route for <code>/foo/bar</code>, you
        attach a Path route builder for <code>/foo</code> to another Path route
        builder for <code>/foo</code>.
      </p>
      <p>
        Another example of route builders is{" "}
        <Link route={docsBuilderRoutes._.search}>Search route builder</Link>{" "}
        which represents a single key-value pair in the search query string (
        <code>?key1=value1&amp;key2=value2</code>). By composing a Path route
        builder and a Search route builder, you can define a URL like{" "}
        <code>/foo?key=value</code>.
      </p>

      <p>
        When defining routes using route builders, an <b>action</b> may be
        defined for each route. An action is a function that returns a React
        element. With the{" "}
        <Link route={docsHookRoutes._.useRoutes}>useRoutes</Link> hook, you can
        resolve the current location against a provided route builder, execute
        the action that corresponds to the current location and render the
        result of that action.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// define a /foo route using a Path route builder
const toplevelBuilder = Rocon.Path()
  .route("foo");
// attach another Path route builder to get a /foo/bar route
const fooRouteBuilder = toplevel._.foo
  .attach(Rocon.Path())
  .routes({
    bar: {
      // define contents that are rendered
      // when /foo/bar is visited
      action: () => <p>This is /foo/bar</p>
    }
  });
      `}</CodeBlock>

      <h3 id="route-records">Route Records</h3>
      <p>
        Routes defined by route builders are represented as objectes called{" "}
        <b>route records</b>. A route record has type{" "}
        <Link route={docsTypeRoutes._.reactRouteRecord}>
          ReactRouteRecord&lt;Match&gt;
        </Link>{" "}
        where <code>Match</code> is the type of match object associated to this
        route record (described later).
      </p>
      <p>
        A route record is needed when you want to attach another route builder
        to it or you want to{" "}
        <Link route={docsHookRoutes._.useNavigate}>navigate</Link> to that
        route. “Attaching one route builder to another builder” in the above
        explanation is not perfectly accurate; actually you attach a route
        builder to a route record (defined using another builder).
      </p>
      <p>
        Route records can be retrieved from the route builder that defines them.
        Route builders other than{" "}
        <Link route={docsBuilderRoutes._.path}>Path route builder</Link> define
        only one route and it can be retrieved by <code>builder.route</code>. On
        the other hand, a Path route builder can define multiple routes,
        including special routes called an exact route and an any route. To
        retrieve a route record from a Path route builder, you can do{" "}
        <code>builder._.foo</code> for named routes,{" "}
        <code>builder.exactRoute</code> for exact routes and
        <code>builder.anyRoute</code> for any routes.
      </p>

      <h3 id="match-objects">Match Objects</h3>
      <p>
        A <b>match object</b> contains extra information needed for a route
        record to point to a concreate URL.
      </p>
      <p>
        For example, if you defined a route for <code>/foo?key=xxxx</code>, the{" "}
        <code>xxxx</code> part can be any string in concrete URLs. When the
        current URL matches this route, the actual value of <code>xxxx</code> is
        provided in a match object (e.g. <code>{`{ key: "somevalue" }`}</code>).
      </p>
      <p>
        A match object is provided as an argument when the action associated to
        that route is executed. In contrast, you have to provide a match object
        when you navigate to a route that requires a corresponding match object.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// define a /foo route using a Path route builder
const toplevelBuilder = Rocon.Path()
  .route("foo");
// attach a Search route builder to get a /foo?key=xxxx route
const fooRouteBuilder = toplevel._.foo
  .attach(Rocon.Search("key"))
  // this route's action receives a match object containing 'key'
  .action(({ key }) => <p>The value of key is {key}</p>);

// ...
// to navigate to /foo?key=xxxx, you need to
// provide the value of 'key'
<Link route={fooRouteBuilder.route} match={{ key: "12345" }}>
  Link to /foo?key=12345
</Link>
      `}</CodeBlock>
      <DocsNavigator />
    </DocsArticle>
  );
};
