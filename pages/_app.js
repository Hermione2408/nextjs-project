import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 767);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  return (
    <Component {...pageProps} isMobileView={isMobileView} />
  );
}

export default MyApp;
