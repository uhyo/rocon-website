import React from "react";
import { Rocon } from "rocon/react";
import { TutorialBasicRouting } from "./pages/tutorial/BasicRouting";
import { TutorialDeepRoutes } from "./pages/tutorial/DeepRoutes";
import { TutorialDynamicRoutes } from "./pages/tutorial/DynamicRoutes";
import { TutorialExactRoute } from "./pages/tutorial/ExactRoute";
import { TutorialLocationState } from "./pages/tutorial/LocationState";
import { TutorialNavigation } from "./pages/tutorial/Navigation";
import { TutorialNested } from "./pages/tutorial/Nested";
import { TutorialNotFound } from "./pages/tutorial/NotFound";
import { TutorialQueryParameter } from "./pages/tutorial/QueryParameter";
import { TutorialTop } from "./pages/tutorial/Top";

export const tutorialRoutes = Rocon.Path()
  .exact({
    action: () => <TutorialTop />,
  })
  .route("basic-routing", (r) => r.action(() => <TutorialBasicRouting />))
  .route("exact-route", (r) => r.action(() => <TutorialExactRoute />))
  .route("deep-routes", (r) => r.action(() => <TutorialDeepRoutes />))
  .route("dynamic-routes", (r) => r.action(() => <TutorialDynamicRoutes />))
  .route("navigation", (r) => r.action(() => <TutorialNavigation />))
  .route("not-found", (r) => r.action(() => <TutorialNotFound />))
  .route("query-parameter", (r) => r.action(() => <TutorialQueryParameter />))
  .route("location-state", (r) => r.action(() => <TutorialLocationState />))
  .route("nested", (r) => r.action(() => <TutorialNested />));

export const toplevelRoutes = Rocon.Path().route("tutorial", (p) =>
  p.attach(tutorialRoutes)
);
