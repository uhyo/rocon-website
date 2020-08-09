import React from "react";
import { Rocon } from "rocon/react";
import { TutorialBasicRouting } from "./pages/tutorial/BasicRouting";
import { TutorialDeepRoutes } from "./pages/tutorial/DeepRoutes";
import { TutorialDynamicRoutes } from "./pages/tutorial/DynamicRoutes";
import { TutorialExactRoute } from "./pages/tutorial/ExactRoute";
import { TutorialNavigation } from "./pages/tutorial/Navigation";
import { TutorialTop } from "./pages/tutorial/Top";

export const tutorialRoutes = Rocon.Path()
  .exact({
    action: () => <TutorialTop />,
  })
  .route("basic-routing", (r) => r.action(() => <TutorialBasicRouting />))
  .route("exact-route", (r) => r.action(() => <TutorialExactRoute />))
  .route("deep-routes", (r) => r.action(() => <TutorialDeepRoutes />))
  .route("dynamic-routes", (r) => r.action(() => <TutorialDynamicRoutes />))
  .route("navigation", (r) => r.action(() => <TutorialNavigation />));

export const toplevelRoutes = Rocon.Path().route("tutorial", (p) =>
  p.attach(tutorialRoutes)
);
