import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/errorBoundary';
import { Provider } from "react-redux";
import store from '../store/store';
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
        <ErrorBoundary>
            <Provider store={store}>
                <Component {...pageProps} isMobileView={isMobileView} />
            </Provider>

        </ErrorBoundary>
    );
}

export default MyApp;
