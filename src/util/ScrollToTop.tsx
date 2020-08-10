import { useEffect } from "react";
import { useHistory } from "rocon/react";

export const ScrollToTop: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [history]);

  return null;
};
