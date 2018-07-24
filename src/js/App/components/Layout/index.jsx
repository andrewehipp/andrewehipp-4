import React from 'react';

import css from './layout.scss'

const Layout = ({ children }) => (
    <div className={css.layout}>
        {children}
    </div>
);

const LayoutAside = ({ children }) => (
    <div className={css.aside}>
        {children}
    </div>
);

const LayoutContent = ({ children }) => (
    <div className={css.content}>
        {children}
    </div>
);

export {
    Layout,
    LayoutAside,
    LayoutContent,
};
