import React from "react";
import { Link } from "rocon/react";
import {
  docsBuilderRoutes,
  docsComponentRoutes,
  docsHookRoutes,
  docsRoutes,
  docsTypeRoutes,
} from "~/routes";
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
      </ul>

      <h3>Hooks</h3>
      <ul>
        <li>
          <Link route={docsHookRoutes._.useRoutes}>useRoutes</Link>
        </li>
        <li>
          <Link route={docsHookRoutes._.useHistory}>useHistory</Link>
        </li>
        <li>
          <Link route={docsHookRoutes._.useLocation}>useLocation</Link>
        </li>
        <li>
          <Link route={docsHookRoutes._.useNavigate}>useNavigate</Link>
        </li>
      </ul>

      <h3>Components</h3>
      <ul>
        <li>
          <Link route={docsComponentRoutes._.roconRoot}>RoconRoot</Link>
        </li>
        <li>
          <Link route={docsComponentRoutes._.link}>Link</Link>
        </li>
      </ul>

      <h3>Types</h3>
      <ul>
        <li>
          <Link route={docsTypeRoutes._.pathSingleRouteInterface}>
            PathSingleRouteInferface
          </Link>
        </li>
      </ul>
    </nav>
  );
};
