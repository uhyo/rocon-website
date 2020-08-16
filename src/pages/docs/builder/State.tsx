import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { ConceptsLink } from "~/util/ConceptLink";
import { DocsArticle } from "../DocsArticle";

export const DocsBuilderState: React.FC = () => {
  return (
    <DocsArticle>
      <h2>StateRouteBuilder</h2>

      <CodeBlock>
        {`
type StateRouteBuilder<
  ActionResult,
  StateValue,
  WildcardFlag extends WildcardFlagType,
  Match
>
        `}
      </CodeBlock>
      <p>
        The <b>State</b>{" "}
        <ConceptsLink hash="route-builders">route builder</ConceptsLink> is a
        route builder that defines one key in the <code>location.state</code>{" "}
        object. By attaching to another route, it can define a new route with a{" "}
        <code>location.state</code> key added.
      </p>
      <p>
        A State route builder always holds one route record that represents a
        route with the specified <code>location.state</code> key.
      </p>

      <h3 id="initialization">Initiaization</h3>
      <CodeBlock>{`
Rocon.State<Key extends string, StateValue, IsOptional extends boolean>(
  matchKey: Key,
  validator: Validator<StateValue>,
  options?: StateRouteBuilderOptions<IsOptional>
): StateRouteBuilder<...>

type Validator<R> = (value: unknown) => value is R;
type StateRouteBuilderOptions<IsOptional extends boolean> = {
  stateKey?: string;
  optional?: IsOptional;
};
`}</CodeBlock>
      <p>
        Creates a new instance of State route builder. It has one route defined
        from first which has no action at first. To define a route with action,
        use the <code>action</code> method.
      </p>
      <ul>
        <li>
          <code>matchKey</code>: Match key with which the value of{" "}
          <code>location.state</code> field is saved in the{" "}
          <ConceptsLink hash="match-objects">match object</ConceptsLink>.
        </li>
        <li>
          <code>validator</code>: Runtime validation function that validates
          that a given value is of type <code>StateValue</code>.
        </li>
        <li>
          <code>stateKey</code>: Name of <code>location.state</code> key. Same
          as <code>matchKey</code> by default.
        </li>
        <li>
          <code>optional</code>: If <code>true</code>, this State route builder
          matches a history record without corresponding{" "}
          <code>location.state</code> key. Defaults to <code>false</code>.
        </li>
      </ul>

      <h4>Example</h4>
      <CodeBlock>{`
const isString: (value: unknown): value is string => typeof value === "string";
// Creates a route record which represents / and requires a string
// to be stored in location.state with key 'foo'
const builder = Rocon.State("foo", isString);
`}</CodeBlock>

      <h3 id="action">builder.action(func)</h3>
      <CodeBlock>{`
action(
  action: ActionType<ActionResult, Match>
): StateRouteBuilder<...>
      `}</CodeBlock>
      <p>
        Returns a new State route builder whose single route has an action
        associated to it.
      </p>

      <h4>Example</h4>
      <CodeBlock>{`
const fooStateRoute = Rocon.State("foo")
  .action(({ foo }) => <p>The value of foo in location.state is {foo}</p>);
      `}</CodeBlock>

      <h3 id="attach">builder.attach(otherBuilder)</h3>
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
// By attaching one State route builder to another, you can
// create a builder for a route with two keys in location.state
const foobarRoute = Rocon.State("foo", isString)
  .attach(Rocon.State("bar", isNumber))
  .action(({ foo, bar }) => <p>Foo is {foo} and bar is {bar}</p>);
      `}</CodeBlock>

      <h3 id="route">builder.route</h3>
      <p>
        The <ConceptsLink hash="route-records">route record</ConceptsLink>{" "}
        defined by this State route builder.
      </p>
      <DocsNavigator />
    </DocsArticle>
  );
};
