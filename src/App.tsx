import React, { Fragment } from "react";
import { RoconRoot, useRoutes } from "rocon/react";
import { SiteNavigation } from "./components/SiteNavigation";
import { ErrorBoundary } from "./ErrorBoundary";
import { toplevelRoutes } from "./routes";
import { ScrollOnTransition } from "./util/ScrollOnTransition";

export const App: React.FC = () => {
  return (
    <RoconRoot>
      <ErrorBoundary>
        <ScrollOnTransition />
        <AppInner />
      </ErrorBoundary>
    </RoconRoot>
  );
};

const AppInner: React.FC = () => {
  const contents = useRoutes(toplevelRoutes);
  return (
    <Fragment>
      <SiteNavigation />
      {contents}
    </Fragment>
  );
};
