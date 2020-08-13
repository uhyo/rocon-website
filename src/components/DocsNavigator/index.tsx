import React from "react";
import { Link } from "rocon/react";
import { docsBuilderRoutes, docsRoutes } from "~/routes";
import { containerCss } from "./styles";

export const DocsNavigator: React.FC = () => {
  return (
    <nav className={containerCss}>
      <h2>Rocon Documentation</h2>

      <p>
        <Link route={docsRoutes.exactRoute}>Top</Link>
      </p>
      <h3>Route Builders</h3>
      <ul>
        <li>
          <Link route={docsBuilderRoutes._.path}>PathRouteBuilder</Link>
        </li>
        <li>
          <Link route={docsBuilderRoutes._.search}>SearchRouteBuilder</Link>
        </li>
        <li>
          <Link route={docsBuilderRoutes._.state}>StateRouteBuilder</Link>
        </li>
        <li>
          <Link route={docsBuilderRoutes._.root}>RootRouteBuilder</Link>
        </li>
        <li>
          <Link route={docsBuilderRoutes._.pathSingleRouteInterface}>
            PathSingleRouteInferface
          </Link>
        </li>
      </ul>
    </nav>
  );
};
