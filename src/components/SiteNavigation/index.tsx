import React from "react";
import { Link } from "rocon/react";
import { toplevelRoutes } from "~/routes";
import { ExternalLink } from "~/util/ExternalLink";
import { siteNavigationCss } from "./styles";

export const SiteNavigation: React.FC = () => {
  return (
    <nav className={siteNavigationCss}>
      <ul>
        <li>
          <Link route={toplevelRoutes._.tutorial}>Rocon Tutorial</Link>
        </li>
        <li>
          <ExternalLink href="https://github.com/uhyo/rocon">
            GitHub
          </ExternalLink>
        </li>
      </ul>
    </nav>
  );
};
