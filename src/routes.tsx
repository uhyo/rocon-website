import React from "react";
import { Rocon } from "rocon/react";
import { TutorialTop } from "./pages/tutorial/Top";

export const tutorialRoutes = Rocon.Path().exact({
  action: () => <TutorialTop />,
});

export const toplevelRoutes = Rocon.Path().route("tutorial", (p) =>
  p.attach(tutorialRoutes)
);
