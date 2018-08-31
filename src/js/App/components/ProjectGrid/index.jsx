import React from 'react';
import cc from 'classcat';

import Appear from '../Appear';

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
                    <Appear delay={50 * childIndex}>
                        {child}
                    </Appear>
                </li>
            );
        })}
    </ul>
);

export default ProjectGrid;
