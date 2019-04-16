import React from 'react';

import css from './tools.scss';

const Tools = ({ tools = [] }) => tools.length ? (
    <ul className={css.list}>
        {tools.map(item =>
            <li key={item} className={css.item}>{item}</li>
        )}
    </ul>
) : null;

export default Tools;
