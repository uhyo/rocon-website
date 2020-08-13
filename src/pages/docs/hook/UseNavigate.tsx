import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsHookUseNavigate: React.FC = () => {
  return (
    <DocsArticle>
      <h2>useNavigate</h2>

      <CodeBlock>
        {`
useNavigate(): Navigate;

type NavigateFunction = <Match>(
  route: ReactRouteRecord<Match>,
  ...args:{} extends Match ? [] : [match: Match]
) => void;
type Navigate = NavigateFunction & {
  push: NavigateFunction
  replace: NavigateFunction
}
        `}
      </CodeBlock>
      <p>
        The <b>useNavigate</b> hook returns a <b>navigate function</b>. A
        navigate function can be used to change the current location. Its first
        argument is a route record that represents the destination location. If
        that route record requires a match object, the second argument is a
        match object for that route.
      </p>
      <p>
        The returned function has a <code>push</code> property that is an alias
        of the returned function itself. It also has a <code>replace</code>{" "}
        property that is a variant of the navigate function which replaces the
        current history entry which instead of pushing to it (in other words, it
        uses <code>history.replace</code> instead of <code>history.push</code>{" "}
        under the hood).
      </p>

      <h3>Example</h3>
      <CodeBlock>{`
const toplevelRoutes = Rocon.Path()
  .routes({
    foo: {
      action: () => <FooPage />
    },
    bar: {
      action: () => <BarPage />
    },
  });

  const FooPage: React.FC = () => {
    const navigate = useNavigate();
    return (
      <button onClick={() => {
        navigate(toplevelRoutes._.bar);
        // or:
        // navigate.push(toplevelRoutes._.bar);
        // navigate.replace(toplevelRoutes._.bar);
      }}>
        Go to bar
      </button>
    );
  };
  
  const BarPage: React.FC = () => {
    return (<p>This is bar</p>);
  };
      `}</CodeBlock>

      <h3>Example 2</h3>
      <CodeBlock>{`
const toplevelRoutes = Rocon.Path()
  .routes({
    foo: {
      action: () => <FooPage />
    },
    bar: {}
  });
// /bar requires 'key' in match object
const barRoute = toplevelRoutes._.bar
  .attach(Rocon.Search("key"))
  .action(({ key }) => <BarPage key={key} />);

  const FooPage: React.FC = () => {
    const navigate = useNavigate();
    return (
      <button onClick={() => {
        navigate(barRoute, { key: "value" });
      }}>
        Go to bar
      </button>
    );
  };
  
  const BarPage: React.FC<{ key: string }> = ({ key }) => {
    return (<p>This is bar. key is {key}</p>);
  };
      `}</CodeBlock>
      <DocsNavigator />
    </DocsArticle>
  );
};
