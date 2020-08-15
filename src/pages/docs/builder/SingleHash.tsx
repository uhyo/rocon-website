import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsBuilderSingleHash: React.FC = () => {
  return (
    <DocsArticle>
      <h2>SingleHashRouteBuilder</h2>

      <CodeBlock>
        {`
type SingleHashRouteBuilder<
  ActionResult,
  WildcardFlag extends WildcardFlagType,
  Match
>
        `}
      </CodeBlock>
      <p>
        The <b>Single Hash</b> route builder is a route builder that represents
        the whole hash part (<code>#id</code>) of a URL as a single string.
      </p>
      <p>
        A Single Hash route builder always holds one route record that
        represents a route with a hash value.
      </p>

      <h3>Initiaization</h3>
      <CodeBlock>{`
Rocon.SingleHash<Key extends string, IsOptional extends boolean>(
  matchKey: Key,
  options?: SingleHashRouteBuilderOptions<IsOptional>
): SingleHashRouteBuilder<...>

type SingleHashRouteBuilderOptions<IsOptional extends boolean> = {
  optional?: IsOptional;
};
`}</CodeBlock>
      <p>
        Creates a new instance of Single Hash route builder. It has one route
        defined from first that has no action. To define a route with action,
        use the <code>action</code> method.
      </p>
      <ul>
        <li>
          <code>matchKey</code>: Match key with which the hash string is saved
          in the match object.
        </li>
        <li>
          <code>optional</code>: If <code>true</code>, this Single Hash route
          builder matches a URL without hash string. Defaults to{" "}
          <code>false</code>.
        </li>
      </ul>

      <h4>Example</h4>
      <CodeBlock>{`
const toplevel = Rocon.Path()
  .route("foo");
// Creates a route record for /foo which allows
// specifying a hash string through the "hash" match object field
const fooRoute = toplevel._.foo
  .attach(Rocon.SingleHash("hash", { optional: true }))
  .action(({ hash }) => <p>Hash string is {hash}</p>)
  .route;

// In a component
const navigate = useNavigate();
// navigates to /foo#id
navigate(fooRoute, { hash: "id" });
`}</CodeBlock>

      <h3>builder.action(func)</h3>
      <CodeBlock>{`
action(
  action: ActionType<ActionResult, Match>
): SingleHashRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Returns a new Single Hash route builder whose single route has an action
        associated to it.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// Create a Single Hash route buillder.
// By accessing /#abcde you see "The hash string is abcde"
const toplevel = Rocon.SingleHash("hash")
  .action(({ hash }) => <p>The hash string is {hash}</p>);
      `}</CodeBlock>

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
// By placing Single Hash route at the very top of composed builders,
// All routes accept specifying hash string on navigation.
const toplevel = Rocon.SingleHash("hash")
  .attach(Rocon.Path())
  .route("foo", (r) => r.action(({ hash }) => <p>Hash string is {hash}</p>));
      `}</CodeBlock>

      <h3>builder.route</h3>
      <p>The route record defined by this Single Hash route builder.</p>
      <DocsNavigator />
    </DocsArticle>
  );
};
