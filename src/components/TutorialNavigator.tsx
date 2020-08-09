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
          <Link route={tutorialRoutes._["basic-routing"]}>Basic Routing</Link>
        </li>
      </ol>
    </nav>
  );
};
