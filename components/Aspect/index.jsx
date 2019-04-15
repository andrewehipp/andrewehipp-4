import React from 'react';
import cc from 'classcat';

import css from './aspect.scss';

const Aspect = ({ children, modifiers = '', className, width, height, ...props }) => {
    const classes = cc([
        className,
        css.aspect,
        modifiers.split(' ').map(modifier => css[modifier]),
    ]);

    const styles = width && height && ({
        paddingTop: `${(height / width) * 100}%`,
    });

    return (
        <div {...props} className={classes} style={styles}>
            {children}
        </div>
    );
};


export default Aspect;
