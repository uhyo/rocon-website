import React, { Fragment, useMemo } from "react";
import Rocon, { useRoutes } from "rocon/react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { Tabs } from "./Tabs";

export const TutorialNested: React.FC = () => {
  const tabRoute = useMemo(() => {
    return Rocon.Search("tab", { optional: true }).action(({ tab }) => (
      <Tabs tab={tab} tabRoute={tabRoute.getRoute()} />
    ));
  }, []);
  const tabContent = useRoutes(tabRoute);
  return (
    <Fragment>
      <h2>Nested Routes</h2>
      <p>
        Sometimes, a nested <code>useRoutes</code> call is useful. If a
        component rendered under <code>useRoutes</code> makes another call of{" "}
        <code>useRoutes</code>, routes rendered by the secondary call are
        automatically treated as children of the parent route. Child route
        builders should be hidden inside a component so that the child routes
        are only accessible during the component is rendered.
      </p>
      {tabContent}

      <TutorialNavigator />
    </Fragment>
  );
};
