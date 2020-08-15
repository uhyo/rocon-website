import { useEffect } from "react";
import { useLocation } from "rocon/react";

export const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
