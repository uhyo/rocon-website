import React, { Fragment } from "react";
import { Link } from "rocon/react";
import { docsRoutes, tutorialRoutes } from "~/routes";
import { ExternalLink } from "~/util/ExternalLink";

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
        <li>
          <ExternalLink href="https://github.com/uhyo/rocon-website">
            GitHub repository for this website (using Rocon)
          </ExternalLink>
        </li>
      </ul>
      <hr />
      <p>
        Give us a feedback via{" "}
        <ExternalLink href="https://github.com/uhyo/rocon">GitHub</ExternalLink>{" "}
        or <ExternalLink href="https://twitter.com/uhyo_">Twitter</ExternalLink>
        !
      </p>
    </Fragment>
  );
};
