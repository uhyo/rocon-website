import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { ExternalLink } from "~/util/ExternalLink";

export const TutorialBasicRouting: React.FC = () => {
  return (
    <Fragment>
      <h2>Basic Routing</h2>
      <p>
        Routes are defined using <b>route builders</b>. Among those provided by
        Rocon, the most commonly used one is the <b>Path</b> route builder.
      </p>

      <h3>Using Path Route Builder</h3>
      <p>
        The next example defines two routes, namely <code>/foo</code> and{" "}
        <code>/bar</code>, using <code>Rocon.Path</code>. It first initializes a
        new Path route builder by calling <code>Rocon.Path()</code>, and then
        calls the <code>route</code> method to add routes to it one by one.
      </p>
      <CodeBlock>
        {`
import Rocon from "rocon/react";
// Alternatively you can choose Rocon by name
// import { Rocon } from "rocon/react";
// You can also import functions directly from rocon/react
// import { Path } from "rocon/react";

const toplevelRoutes = Rocon.Path()
  .route("foo", (route) => route.action(() => <p>This is foo</p>))
  .route("bar", (route) => route.action(() => <p>This is bar</p>));
        `}
      </CodeBlock>

      <p>
        The <code>route</code> method receives a callback function with one
        parameter <code>route</code>. It has an <code>action</code> method that
        receives a function that returns a React node. By calling the{" "}
        <code>action</code> method, you can register what is rendered when that
        route (<code>/foo</code> or <code>/bar</code>) is visited.
      </p>

      <h3>Using RoconRoot</h3>
      <p>
        Rocon requires your app to be wrapped by a component named{" "}
        <code>RoconRoot</code>. It maintains a <code>history</code> object and
        tracks history change. A common set up of <code>RoconRoot</code> will
        look like:
      </p>

      <CodeBlock>
        {`
import { RoconRoot } from "rocon/react";

const App: React.FC = () => {
  return (
    <RoconRoot>
      <Routes />
    </RoconRoot>
  );
};
        `}
      </CodeBlock>

      <p>
        By default, <code>RoconRoot</code> automatically creates a History
        instance by calling{" "}
        <ExternalLink href="https://github.com/ReactTraining/history/blob/master/docs/api-reference.md#createbrowserhistory">
          createBrowserHistory
        </ExternalLink>
        . To provide your own History instance, pass it via the{" "}
        <code>history</code> prop.
      </p>

      <CodeBlock>
        {`
const App: React.FC = () => {
  const history = useMemo(() => {
    return createMemoryHistory();
  }, []);
  return (
    <RoconRoot history={history}>
      <Routes />
    </RoconRoot>
  );
};
        `}
      </CodeBlock>

      <h3>Using useRoutes() to Render Resolved Route</h3>

      <p>
        Now you have a route builder defined and <code>RoconRoot</code> set up.
        What you do next is to render the contents using the{" "}
        <code>useRoutes</code> hook provided by Rocon.
      </p>
      <p>
        The <code>useRoutes</code> hook receives a route builder and returns a
        React node. A typical component that uses <code>useRoutes</code> will
        look like:
      </p>

      <CodeBlock>
        {`
import { useRoutes } from "rocon/react";

const Routes: React.FC = () => {
  return useRoutes(toplevelRoutes);
};
        `}
      </CodeBlock>

      <p>
        Now, you should see <code>I am foo</code> rendered if you visit{" "}
        <code>/foo</code>. If you visit <code>/bar</code>, <code>I am bar</code>{" "}
        should be rendered.
      </p>

      <TutorialNavigator />
    </Fragment>
  );
};
