import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";

export const TutorialQueryParameter: React.FC = () => {
  return (
    <Fragment>
      <h2>Query Parameters</h2>
      <p>
        Query parameters, also known as <code>location.search</code>, are the
        parts of URL preceded by a <code>?</code> mark. One parameter is a
        key-value pair of the form <code>key=value</code>.
      </p>
      <p>
        To retrieve information from query parameters, we use a <b>Search</b>{" "}
        route builder. If the <code>/foo</code> route requires a query parameter
        named <code>name</code>, we create a Search route builder for the{" "}
        <code>name</code> query and attach it to the <code>/foo</code> route.
        The value of the <code>name</code> query can be retrieved from the match
        object.
      </p>

      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .route("foo")
  .route("bar", (route) => route.action(() => <p>This is bar</p>));

const fooRoute = toplevelRoutes._.foo
  .attach(Rocon.Search("name"))
  .action(({ name }) => <p>This is foo, your name is {name}</p>);
        `}
      </CodeBlock>
      <p>
        As demonstrated above, a Search route builder has an <code>action</code>{" "}
        method to define an action for that route. With this set up, by visiting{" "}
        <code>/foo?name=uhyo</code> you will see{" "}
        <code>This is foo, your name is uhyo</code>. If <code>name</code> query
        parameter is not provided, a <code>LocationNotFoundError</code> is
        thrown.
      </p>

      <h3>Optional Query Parameter</h3>
      <p>
        If you want the query parameter to be optional, set the{" "}
        <code>optional</code> option to true. By setting the{" "}
        <code>optional</code> flag, the type of <code>name</code> in the match
        object becomes
        <code>string | undefined</code>, not <code>string</code>.
      </p>

      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .route("foo")
  .route("bar", (route) => route.action(() => <p>This is bar</p>));

const fooRoute = toplevelRoutes._.foo
  .attach(Rocon.Search("name", { optional: true }))
  .action(({ name }) => <p>This is foo, your name is {name}</p>);
        `}
      </CodeBlock>

      <h3>Specifying a Different Search Key</h3>
      <p>
        As shown above, the first parameter of <code>Search</code> is treated
        both as a search query key and also as a match key (key of the match
        object). The match key is always the first paramter, and you can use a{" "}
        <code>searchKey</code> option to use a different string as a search key.
      </p>

      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .route("foo")
  .route("bar", (route) => route.action(() => <p>This is bar</p>));

const fooRoute = toplevelRoutes._.foo
  .attach(Rocon.Search("name", { searchKey: "yourname" }))
  .action(({ name }) => <p>This is foo, your name is {name}</p>);
        `}
      </CodeBlock>
      <p>
        With this setting, <code>fooRoute</code> now expresses a URL like{" "}
        <code>/foo?yourname=uhyo</code>.
      </p>

      <h3>Navigating to a Route with Query Parameter</h3>
      <p>
        Of course, to navigate to a route with query parameters, you have to
        provide a match object. A route record of a Search path builder is
        available via its <code>route</code> property.
      </p>
      <CodeBlock>
        {`
navigate(fooRoute.route, { name: "Pikachu" });
        `}
      </CodeBlock>

      <h3>Multiple Query Parameters</h3>
      <p>
        One Search route builder supports only one query parameter. To define
        more than one query parameter for the same route, attach another Search
        route builder to that route.
      </p>
      <CodeBlock>
        {`
const fooRoute = toplevelRoutes._.foo
  .attach(Rocon.Search("name", { searchKey: "yourname" }))
  .attach(Rocon.Search("age", { optional: true }))
  .action(({ name, age }) => <p>This is foo, your name is {name} and your age is {age}</p>);
        `}
      </CodeBlock>

      <TutorialNavigator />
    </Fragment>
  );
};
