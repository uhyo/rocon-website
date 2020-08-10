import React from "react";
import { Link } from "rocon/react";
import { tutorialRoutes } from "~/routes";
import { containerCss } from "./styles";

export const TutorialNavigator: React.FC = () => {
  return (
    <nav className={containerCss}>
      <h2>Rocon Tutorial</h2>

      <p>
        <Link route={tutorialRoutes.exactRoute}>Top</Link>
      </p>
      <h3>Basics</h3>
      <ol>
        <li>
          <Link route={tutorialRoutes._["basic-routing"]}>
            Basic Routing and Rendering
          </Link>
        </li>
        <li>
          <Link route={tutorialRoutes._["exact-route"]}>Exact Route</Link>
        </li>
        <li>
          <Link route={tutorialRoutes._["deep-routes"]}>Deep Routes</Link>
        </li>
        <li>
          <Link route={tutorialRoutes._["dynamic-routes"]}>
            Dynamic Routes and Matching
          </Link>
        </li>
        <li>
          <Link route={tutorialRoutes._.navigation}>Navigation</Link>
        </li>
        <li>
          <Link route={tutorialRoutes._["not-found"]}>
            Handling of Nonexistent Paths
          </Link>
        </li>
        <li>
          <Link route={tutorialRoutes._["query-parameter"]}>
            Query Parameters
          </Link>
        </li>
        <li>
          <Link route={tutorialRoutes._["location-state"]}>
            Location States
          </Link>
        </li>
      </ol>
      <h3>Advanced</h3>
      <ol>
        <li>
          <Link route={tutorialRoutes._["util-hooks"]}>Utility Hooks</Link>
        </li>
        <li>
          <Link route={tutorialRoutes._.nested}>Nested Routes</Link>
        </li>
      </ol>
    </nav>
  );
};
