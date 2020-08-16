import { useEffect } from "react";
import { useLocation } from "rocon/react";

export const ScrollOnTransition: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const elm = document.getElementById(id);
      if (elm) {
        elm.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
