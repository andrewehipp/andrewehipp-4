import React from 'react';
import cc from 'classcat';

import css from './project-grid.scss';

const ProjectGrid = ({ children, layout = {} }) => (
    <ul className={css.projectGrid}>
        {React.Children.map(children, (child, childIndex) => {
            const layoutConfig = layout[childIndex] || {};
            const classes = cc([
                css.item,
                {
                    [css.wide]: layoutConfig.wide,
                    [css.alignBottom]: layoutConfig.align === 'bottom',
                },
            ]);

            return (
                <li className={classes}>
                    {child}
                </li>
            );
        })}
    </ul>
);

export default ProjectGrid;
