import React, { Fragment } from "react";
import { RoconRoot, useRoutes } from "rocon/react";
import { SiteNavigation } from "./components/SiteNavigation";
import { ErrorBoundary } from "./ErrorBoundary";
import { toplevelRoutes } from "./routes";
import { ScrollToTop } from "./util/ScrollToTop";

export const App: React.FC = () => {
  return (
    <RoconRoot>
      <ErrorBoundary>
        <ScrollToTop />
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
