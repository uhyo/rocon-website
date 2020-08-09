import React from "react";
import { Link } from "rocon/react";
import { tutorialRoutes } from "~/routes";

export const TutorialNavigator: React.FC = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link route={tutorialRoutes.exactRoute}>Top</Link>
        </li>
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
      </ol>
    </nav>
  );
};
