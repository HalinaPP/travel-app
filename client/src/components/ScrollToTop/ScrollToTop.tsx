import React, { FC, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

const ScrollToTop: FC = (props) => {
  const location = useLocation();

  useEffect(() => {
    console.log('location');
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
export default withRouter(ScrollToTop);
