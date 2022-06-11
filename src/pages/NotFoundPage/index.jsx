import React from 'react';

import cl from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <div className={cl.root}>
            <div className="container">
                <h1>NotFoundPage</h1>
                <p>We're sorry, but this page doesn't exist.</p>
            </div>
        </div>
    );
};

export default NotFoundPage;
