import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";

export const TutorialBasicRouting: React.FC = () => {
  return (
    <Fragment>
      <h2>Basic Routing</h2>
      <p>
        Routes are defined using <b>route builders</b>. Among those provided by
        Rocon, the most commonly used one is the <b>Path</b> route builder.
      </p>
      <p>
        The next example defines two routes, namely <code>/foo</code> and{" "}
        <code>/bar</code>, using <code>Rocon.Path</code>. It first initializes a
        new Path route builder by calling <code>Rocon.Path()</code>, and then
        calls the <code>route</code> method to add routes to it one by one.
      </p>
      <CodeBlock>
        {`
import Rocon from "rocon/react";
// Alternatively you can choose these ways of importing Rocon
// import { Rocon } from "rocon/react";
// import { Path } from "rocon/react";
        `}
      </CodeBlock>
      <TutorialNavigator />
    </Fragment>
  );
};
