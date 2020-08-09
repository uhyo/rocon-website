import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { ExternalLink } from "~/util/ExternalLink";

export const TutorialTop: React.FC = () => {
  return (
    <Fragment>
      <h2>Rocon Tutorial</h2>
      <p>
        <b>Rocon</b> is a router library with{" "}
        <strong>ultimate type safety</strong> for your routing and navigation.
        Currently we provide a React binding of Rocon. It integrates with HTML's
        history API backed by the{" "}
        <ExternalLink href="https://www.npmjs.com/package/history">
          history
        </ExternalLink>{" "}
        module.
      </p>
      <p>
        Rocon is intended to be an alternative of{" "}
        <ExternalLink href="https://www.npmjs.com/package/react-router-dom">
          react-router-dom
        </ExternalLink>
        . The major difference is how routes are defined, for which Rocon
        provides an ultimately type-safe way.
      </p>

      <h3>Installation</h3>
      <pre>
        <code>npm install rocon</code>
      </pre>
      <p>
        In order to use the React binding of Rocon, it requires{" "}
        <code>react@^16.8.0</code> and <code>history@^5.0.0</code>
        as peer dependencies.
      </p>
      <p>
        Rocon needs <strong>TypeScript 4.0 or later</strong> for it to
        typecheck. Also,
        <code>@types/react</code> should be installed.
      </p>
      <TutorialNavigator />
    </Fragment>
  );
};
