import React, { useEffect, useState } from 'react';
import '../Style/loadingAnimation.css';

const LoadingAnimation = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading animation after 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`loading-overlay ${isLoading ? 'visible' : 'hidden'}`}>
            <div className="loading-content">
                <div className="loading-logo">YF</div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation; 