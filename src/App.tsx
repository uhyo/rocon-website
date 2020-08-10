import React from "react";
import { RoconRoot, useRoutes } from "rocon/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { toplevelRoutes } from "./routes";

export const App: React.FC = () => {
  return (
    <RoconRoot>
      <ErrorBoundary>
        <AppInner />
      </ErrorBoundary>
    </RoconRoot>
  );
};

const AppInner: React.FC = () => {
  return useRoutes(toplevelRoutes);
};
