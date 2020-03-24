import React from 'react';
import cc from 'classcat';

import css from './button.module.scss';

const Button = ({
    node = 'button',
    className,
    modifiers = '',
    children,
    ...props
}) => {
    const classes = cc([
        className,
        css.button,
        modifiers.split(' ').map((modifier) => css[modifier]),
    ]);

    return React.createElement(node, {
        ...props,
        className: classes,
    }, children);
};

export default Button;
