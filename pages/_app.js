import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/errorBoundary';

function MyApp({ Component, pageProps }) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      // console.log("window.innerwidth",window.innerWidth)
      setIsMobileView(window.innerWidth < 767);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  return (
    <ErrorBoundary>
      <Component {...pageProps} isMobileView={isMobileView} />
    </ErrorBoundary>
  );
}

export default MyApp;
