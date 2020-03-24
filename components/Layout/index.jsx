import React from 'react';
import cc from 'classcat';

import css from './layout.module.scss'

const Layout = ({
    bleedTop,
    bleedBottom,
    renderContent = () => null,
    renderSidebar = () => null,
}) => {
    const classes = cc([
        css.content,
        {
            [css.bleedTop]: bleedTop,
            [css.bleedBottom]: bleedBottom,
        },
    ]);

    return (
        <div className={css.layout}>
            <div className={css.aside}>
                {renderSidebar()}
            </div>
            <div className={classes}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Layout;
