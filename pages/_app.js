import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/errorBoundary';
import { Provider } from "react-redux";
import store from '../store/store';
import "../styles/globals.css"
function MyApp({ Component, pageProps }) {
    const [isMobileView, setIsMobileView] = useState(false);
    
    useEffect(() => {
        //window.open(`https://unsplash.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&redirect_uri=http://localhost:3000/login&response_type=code&scope=public+read_user`,"_self")
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
