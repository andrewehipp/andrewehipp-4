import React from 'react';
import cc from 'classcat';

import css from './layout.scss';

const Layout = ({ children }) => (
    <div className={css.layout}>
        {children}
    </div>
);

const LayoutAside = ({ offset, children }) => {
    const classes = cc([
        css.aside,
        {
            [css.asideOffset]: offset,
        },
    ]);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const LayoutContent = ({ bleedTop, bleedBottom, children }) => {
    const classes = cc([
        css.content,
        {
            [css.bleedTop]: bleedTop,
            [css.bleedBottom]: bleedBottom,
        },
    ]);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export {
    Layout,
    LayoutAside,
    LayoutContent,
};
