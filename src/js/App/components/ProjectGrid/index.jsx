import React from 'react';
import cc from 'classcat';

import Appear from '../Appear';

import css from './project-grid.scss';

const ProjectGrid = ({ children, layout = [] }) => (
    <ul className={css.projectGrid}>
        {React.Children.map(children, (child, childIndex) => {
            const classes = cc([
                css.item,
                {
                    [css.wide]: layout.indexOf(childIndex) !== -1,
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
