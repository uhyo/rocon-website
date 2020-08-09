import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";

export const TutorialDynamicRoutes: React.FC = () => {
  return (
    <Fragment>
      <h2>Dynamic Routes and Matching</h2>
      <p>
        Not all routes are static; a common situation is that we want to define
        routes like <code>/:id/profile</code> where any string is allowed to
        fill the <code>:id</code> segment.
      </p>
      <p>
        To handle this situation, the Path route builder provides an{" "}
        <code>any</code> method to define a catch-all route. In the next example
        a builder with a catch-all route is defined. Visiting <code>/uhyo</code>{" "}
        should result in <code>Hello, uhyo</code> and visiting{" "}
        <code>/Pikachu</code> should result in <code>Hello, Pikachu</code>. If
        both the <code>any</code> route and other normal routes are defined,
        normal routes take precedence.
      </p>
      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .any("id", {
    action: ({ id }) => <p>Hello, {id}</p>
  });
        `}
      </CodeBlock>
      <p>
        The first argument passed to <code>any</code> is a <b>match key</b>. A
        match key is the name of a property of the <b>match object</b>, which is
        the object that stores variable parts of URLs. In the case of the above
        example, any path segment is catched by the any route and the segment is
        stored in the <code>id</code> property of the match object.
      </p>
      <p>
        A match object is passed to the action function so that it can be used
        to render contents of the any route. Of course, all the process is
        type-safe; the <code>id</code> property of the match object is only
        available under the corresponding any route.
      </p>

      <h3>Attaching to the any route</h3>
      <p>
        By attaching another route to the any route, paths like{" "}
        <code>/:id/profile</code> are realized.
      </p>
      <p>
        A Path route builder with an any route has a <code>anyRoute</code>{" "}
        property which is the route record of the any route. Thus, you can
        define <code>/:id/profile</code> as follows:
      </p>
      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .any("id");

const userRoutes = toplevelRoutes.anyRoute
  .attach(Rocon.Path())
  .route("profile", (route) => route.action(({ id }) =>
    <p>Your ID is {id}</p>
  ));
        `}
      </CodeBlock>

      <TutorialNavigator />
    </Fragment>
  );
};
