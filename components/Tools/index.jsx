import React from 'react';
import { useSprings, animated } from 'react-spring';

import css from './tools.module.scss';

const Tools = ({ tools = [] }) => {
    if (!tools.length) {
        return null;
    }

    const [springs, set] = useSprings(tools.length, () => ({
        opacity: 0,
        transformOrigin: 'right center',
        transform: 'rotate(-90deg)',
    }));

    React.useEffect(() => {
        set((index) => ({
            opacity: 1,
            transformOrigin: 'right center',
            transform: window.innerWidth > 1200 ? 'rotate(-45deg)' : 'rotate(0deg)',
            delay: 100 * index + 500,
        }));
    });

    return (
        <ul className={css.list}>
            {springs.map((props, index) => (
                <animated.li
                    key={tools[index]}
                    style={props}
                    className={css.item}
                >
                    <span className={css.tag}>{tools[index]}</span>
                </animated.li>
            ))}
        </ul>
    );
}

export default Tools;
