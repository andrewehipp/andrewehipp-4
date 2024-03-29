import React from 'react';
import cc from 'classcat';

import css from './project-grid.module.scss';

const ProjectGrid = ({ items, renderItem, layout = {} }) => (
    <ul className={css.projectGrid}>
        {items.map((item, itemIndex) => {
            const layoutConfig = layout[itemIndex] || {};
            const classes = cc([
                css.item,
                {
                    [css.wide]: layoutConfig.wide,
                    [css.alignBottom]: layoutConfig.align === 'bottom',
                },
            ]);

            return (
                <li key={item.sys.id} className={classes}>
                    {renderItem(item, itemIndex, items)}
                </li>
            );
        })}
    </ul>
);

export default ProjectGrid;
