/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const useCreatePortalInBody = () => {
  const wrapperRef = useRef(null);
  if (wrapperRef.current === null && typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.setAttribute('data-body-portal', '');
    // @ts-ignore
    wrapperRef.current = div;
  }
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof document === 'undefined') {
      return;
    }
    document.body.appendChild(wrapper);
    // eslint-disable-next-line consistent-return
    return () => {
      // @ts-ignore
      document.body.removeChild(wrapper);
    };
  }, []);
  // @ts-ignore
  return (children) => wrapperRef.current && createPortal(children, wrapperRef.current);
};

export default { useCreatePortalInBody };
