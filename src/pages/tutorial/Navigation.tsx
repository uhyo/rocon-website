import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";

export const TutorialNavigation: React.FC = () => {
  return (
    <Fragment>
      <h2>Navigation</h2>
      <p>
        <b>Navigation</b> means to move from one path to another path. Rocon
        provides two ways of navigation: the <code>Link</code> component and the{" "}
        <code>useNavigate</code> hook. The <code>Link</code> component is
        suitable when you want to create an <code>&lt;a&gt;</code> element
        which, on clicked, navigates to the specified path. The{" "}
        <code>useNavigate</code> hook is for other cases where you have to
        programatically perform a navigation.
      </p>
      <p>
        With Rocon, you specify the target of navigation by passing a route
        record. This is the core of Rocon's type safety; you cannot even create
        a route record for a path you did not define, so you will never
        mistakenly specify a nonexistent path.
      </p>

      <h3>Using the Link Component</h3>
      <CodeBlock>
        {`
import Rocon, { Link } from "rocon/react";

const toplevelRoutes = Rocon.Path()
  .route("foo", (route) => route.action(() => <p>This is foo</p>))
  .route("bar", (route) => route.action(() => <p>This is bar</p>));

const Menu: React.FC = () => {
  return (
    <ul>
      <li>
        <Link route={toplevelRoutes._.foo}>Go to foo</Link>
      </li>
      <li>
        <Link route={toplevelRoutes._.bar}>Go to bar</Link>
      </li>
    </ul>
  );
};
        `}
      </CodeBlock>
      <p>
        The above example first defines <code>/foo</code> and <code>/bar</code>.
        Then it defines a <code>Menu</code> component which consists of links to{" "}
        <code>/foo</code> and <code>/bar</code>. We do not write down raw paths;
        instead the <code>Link</code> component receives a route record through
        the <code>route</code> prop. The <code>Link</code> component internally
        converts the given route record to an actual path.
      </p>

      <h3>Using the useNavigate Hook</h3>
      <p>
        The <code>useNavigate</code> hook returns a <code>navigate</code>{" "}
        function. It receives a route record and performs a navigation to the
        given route.
      </p>
      <CodeBlock>
        {`
const Menu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ul>
      <li>
        <button onClick={()=> navigate(toplevelRoutes._.foo)}>
          Go to foo
        </button>
      </li>
      <li>
        <button onClick={()=> navigate(toplevelRoutes._.bar)}>
          Go to bar
        </button>
      </li>
    </ul>
  );
};
        `}
      </CodeBlock>
      <p>
        There is also a <code>navigate.replace</code> function which performs{" "}
        <code>history.replace</code> instead of <code>history.push</code>.
      </p>

      <h3>Providing a Match Object</h3>
      <p>
        To navigate to a route which requires a match object, we have to provide
        a corresponding match object. For <code>useNavigate</code>, pass the
        match object as a second parameter. For <code>Link</code>, pass it via a{" "}
        <code>match</code> prop.
      </p>
      <p>
        Of course, TypeScript tracks when a match object is required. Not
        passing anything, passing an empty object, or setting <code>id</code> to
        a number instead of a string would all result in a type error.
      </p>
      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .any("id", {
    action: ({ id }) => <p>Hello, {id}</p>
  });

const Menu: React.FC = ()=> {
  const navigate = useNavigate();
  return (
    <button onClick={()=> {
      navigate(toplevelRoutes.anyRoute, { id: "uhyo" });
    }}>Go to uhyo's page</button>
  );
};
        `}
      </CodeBlock>

      <TutorialNavigator />
    </Fragment>
  );
};
