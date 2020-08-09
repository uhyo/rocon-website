import React from "react";
import { Rocon } from "rocon/react";
import { TutorialBasicRouting } from "./pages/tutorial/BasicRouting";
import { TutorialExactRoute } from "./pages/tutorial/ExactRoute";
import { TutorialTop } from "./pages/tutorial/Top";

export const tutorialRoutes = Rocon.Path()
  .exact({
    action: () => <TutorialTop />,
  })
  .route("basic-routing", (r) => r.action(() => <TutorialBasicRouting />))
  .route("exact-route", (r) => r.action(() => <TutorialExactRoute />));

export const toplevelRoutes = Rocon.Path().route("tutorial", (p) =>
  p.attach(tutorialRoutes)
);
