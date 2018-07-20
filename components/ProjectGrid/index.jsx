import React from 'react';

import css from './project-grid.scss';

const ProjectGrid = ({ children }) => (
    <ul className={css.projectGrid}>
        {React.Children.map(children, (child) => (
            <li className={css.item}>
                {child}
            </li>
        ))}
    </ul>
);


export default ProjectGrid;
