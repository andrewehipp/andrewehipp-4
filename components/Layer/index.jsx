import React from 'react';

import css from './layer.module.scss';

const Layer = ({ children }) => (
    <div className={css.layer}>
        {children}
    </div>
);

export default Layer;
