import React from 'react';

import css from './container.scss';

const Container = ({ children, ...props }) => (
    <div className={css.container} {...props}>
        {children}
    </div>
);

export default Container;
