import React from "react";
import { Rocon } from "rocon/react";
import { TutorialBasicRouting } from "./pages/tutorial/BasicRouting";
import { TutorialTop } from "./pages/tutorial/Top";

export const tutorialRoutes = Rocon.Path()
  .exact({
    action: () => <TutorialTop />,
  })
  .route("basic-routing", (r) => r.action(() => <TutorialBasicRouting />));

export const toplevelRoutes = Rocon.Path().route("tutorial", (p) =>
  p.attach(tutorialRoutes)
);
