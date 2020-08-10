import React, { Fragment } from "react";
import { Link } from "rocon/react";
import { docsRoutes, tutorialRoutes } from "~/routes";

export const TopPage: React.FC = () => {
  return (
    <Fragment>
      <pre>
        <code>npm install rocon history</code>
      </pre>
      <p>
        Rocon is a router library with <strong>ultimate type safety</strong>.
      </p>
      <ul>
        <li>
          <Link route={tutorialRoutes.exactRoute}>Read the Rocon Tutorial</Link>
        </li>
        <li>
          <Link route={docsRoutes.exactRoute}>Rocon Docs (coming soon)</Link>
        </li>
      </ul>
    </Fragment>
  );
};
