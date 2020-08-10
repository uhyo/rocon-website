import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";

export const TutorialUtilHooks: React.FC = () => {
  return (
    <Fragment>
      <h2>Utility Hooks</h2>
      <p>
        Other than the <code>useRoutes</code> hook, Rocon provides two utility
        hooks.
      </p>

      <h3>useHistory</h3>
      <p>
        <code>useHistory()</code> just returns current history object. Although
        it allows direct manipulation of current location with{" "}
        <code>history.push</code>, it is not recommended as it cannot benefit
        from Rocon's type safety. Direct access to the history object is useful
        for listening to history change, or performing{" "}
        <code>history.back()</code>, for example.
      </p>

      <h3>useLocation</h3>
      <p>
        <code>useLocation()</code> returns current location object. It triggers
        a re-rendering whenever current location changes.
      </p>

      <TutorialNavigator />
    </Fragment>
  );
};
