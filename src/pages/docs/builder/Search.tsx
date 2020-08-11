import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsBuilderSearch: React.FC = () => {
  return (
    <DocsArticle>
      <h2>SearchRouteBuilder</h2>

      <CodeBlock>
        {`
type SearchRouteBuilder<
  ActionResult,
  WildcardFlag extends WildcardFlagType,
  Match
>
        `}
      </CodeBlock>
      <p>
        The <b>Search</b> route builder is a route builder that defines one
        search query param (<code>?key=value</code> pair). By attaching to
        another route, it can define a new route with a search query param
        added.
      </p>
      <p>
        A Search route builder always holds one route record that represents a
        route with the specified query parameter.
      </p>

      <h3>Initiaization</h3>
      <CodeBlock>{`
Rocon.Search<Key extends string, IsOptional extends boolean>(
  matchKey: Key,
  options?: SearchRouteBuilderOptions<IsOptional>
): SearchRouteBuilder<...>

type SearchRouteBuilderOptions<IsOptional extends boolean> = {
  searchKey?: string;
  optional?: IsOptional;
};
`}</CodeBlock>
      <p>
        Creates a new instance of Search route builder. It has one route defined
        from first, but it has no action. To define a route with action, use the{" "}
        <code>action</code> method.
      </p>
      <ul>
        <li>
          <code>matchKey</code>: Match key with which the value of search query
          is saved in the match object.
        </li>
        <li>
          <code>searchKey</code>: Name of search query param (<code>foo</code>{" "}
          in <code>foo=bar</code>). Same as <code>matchKey</code> by default.
        </li>
        <li>
          <code>optional</code>: If <code>true</code>, this Search route builder
          matches a URL without corresponding query parameter. Defaults to{" "}
          <code>false</code>.
        </li>
      </ul>

      <h4>Example</h4>
      <CodeBlock>{`
// Creates a route record which represents /?foo=value
const builder = Rocon.Search("foo");
// Creates a route record which represents /?foo=value
// where foo is optional // and \`value\` is stored
// in match object with key "fooValue"
const builder2 = Rocon.Search("fooValue", {
  searchKey: "foo",
  optional: true
});
`}</CodeBlock>

      <h3>builder.action(func)</h3>
      <CodeBlock>{`
action(
  action: ActionType<ActionResult, Match>
): SearchRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Returns a new Search route builder whose single route has an action
        associated to it.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
// Create a Search route buillder for /?foo=value.
// By accessing /?foo=abcde you see "The value of foo is abcde"
const fooSearchRoute = Rocon.Search("foo")
  .action(({ foo }) => <p>The value of foo is {foo}</p>);
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
// By attaching one Search route builder to another, you can
// create a builder for /?foo=123&bar=456
const foobarRoute = Rocon.Search("foo")
  .attach(Rocon.Search("bar"))
  .action(({ foo, bar }) => <p>Foo is {foo} and bar is {bar}</p>);
      `}</CodeBlock>

      <h3>builder.route</h3>
      <p>The route record defined by this Search route builder.</p>
      <DocsNavigator />
    </DocsArticle>
  );
};
