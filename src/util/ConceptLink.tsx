import React, { useMemo } from "react";
import { Link } from "rocon/lib/react";
import { docsRoutes } from "~/routes";

type Props = {
  hash: string;
};
/**
 * Util component to make a link to "concepts" page
 */
export const ConceptsLink: React.FC<Props> = ({ hash, children }) => {
  const match = useMemo(() => ({ hash }), [hash]);
  return (
    <Link route={docsRoutes._.concepts} match={match} children={children} />
  );
};
