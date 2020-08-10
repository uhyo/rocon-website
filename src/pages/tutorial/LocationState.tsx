import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { ExternalLink } from "~/util/ExternalLink";

export const TutorialLocationState: React.FC = () => {
  return (
    <Fragment>
      <h2>Location States</h2>
      <p>
        HTML's history API (and the history module) supports a data-passing
        mechanism known as <code>location.state</code>. It allows passing more
        complex data than a string, including objects and arrays. Its downside
        is that <code>location.state</code> is not a part of URL. This means
        that there is no means of direct access to a route with location states;
        a user must navigate from another route to get to a route with location
        states.
      </p>
      <p>
        Location states are defined by <b>State</b> route builders.
        <code>Rocon.State</code> receives a <strong>validator</strong> of type{" "}
        <code>(value: unknown) =&gt; value is Value</code> where{" "}
        <code>Value</code> is the type of its state.
      </p>

      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .route("user");

type User = {
  name: string;
  age: number;
}

const userValidator = (value: any): value is User => {
  return (
    value != null &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
};

const userRoute = toplevelRoutes._.user
  .attach(Rocon.State("user", userValidator))
  .action(({ user }) => <p>
    Hello, {user.name}!
    You are {user.age} years old.
  </p>);
        `}
      </CodeBlock>
      <p>
        The validator has two roles: one is to perform a runtime check of
        whether a value of correct type is passed as a location state, and the
        other is to tell Rocon the type of the defined state. Thanks to the type
        of the validator, Rocon can infer the type of <code>user</code> property
        of the match object. If defining a validator by yourself is cumbersome,
        a runtime type check library like{" "}
        <ExternalLink href="https://github.com/gcanti/io-ts">
          io-ts
        </ExternalLink>{" "}
        can be utilized.
      </p>

      <h3>Navigation</h3>
      <p>
        Navigation to routes with a location state is just the same as other
        routes; provide a match object with needed value in it.
      </p>
      <CodeBlock>
        {`
navigate(userRoute.route, {
  user: {
    name: "Pikachu",
    age: 24
  }
});
        `}
      </CodeBlock>

      <TutorialNavigator />
    </Fragment>
  );
};
