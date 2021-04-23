import { FC, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

const ScrollToTop: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
export default withRouter(ScrollToTop);
