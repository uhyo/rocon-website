import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";

export const TutorialExactRoute: React.FC = () => {
  return (
    <Fragment>
      <h2>Exact Route</h2>
      <p>
        At the previous page we learned how to render contents in response to
        URLs like <code>/foo</code> or <code>/bar</code>. Then, how do we handle
        the root path (<code>/</code>)?
      </p>
      <p>
        In this case, we use another method named <code>exact</code> as in the
        next example.
      </p>

      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .exact({
    action: () => <p>I am top page</p>
  })
  .route("foo", (route) => route.action(() => <p>This is foo</p>))
  .route("bar", (route) => route.action(() => <p>This is bar</p>));
        `}
      </CodeBlock>

      <p>
        To register the action of the root path, we pass an object containing an{" "}
        <code>action</code> property to the <code>exact</code> method. Order
        does not matter; both <code>exact</code> and <code>route</code> can come
        first.
      </p>

      <TutorialNavigator />
    </Fragment>
  );
};
