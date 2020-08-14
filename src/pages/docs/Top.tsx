import React, { Fragment } from "react";
import { DocsNavigator } from "~/components/DocsNavigator";

export const DocsTop: React.FC = () => {
  return (
    <Fragment>
      <h2>Rocon Documentation</h2>
      <DocsNavigator />
    </Fragment>
  );
};
