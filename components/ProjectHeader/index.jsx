import React from 'react';
import { useSpring, animated } from 'react-spring'

import Tools from '../Tools';

import css from './project-header.scss';

const ProjectHeader = ({
    fields: {
        name,
        client,
        builtWith,
    } = {},
}) => {
    const {
        x: titleX,
        height: titleHeight,
        ...titleRest
    } = useSpring({
        // opacity: 1,
        x: 0,
        height: 39,
        from: {
            // opacity: 0,
            x: 39,
            height: 0,
        },
    });

    const {
        x: clientX,
        height: clientHeight,
        ...clientRest
    } = useSpring({
        // opacity: 1,
        x: 0,
        height: 26,
        delay: 200,
        from: {
            // opacity: 0,
            x: 26,
            height: 0,
        },
    });

    return (
        <header className={css.projectHeader}>
            <animated.div
                className={css.titleWrap}
                style={{
                    ...titleRest,
                    transform: titleX.interpolate(x => `translate3d(0, ${x}px, 0)`),
                }}
            >
                <animated.h1 className={css.title} style={{ height: titleHeight }}>
                    {name}
                </animated.h1>
            </animated.div>

            <animated.div
                className={css.clientWrap}
                style={{
                    ...clientRest,
                    transform: clientX.interpolate(x => `translate3d(0, ${x}px, 0)`),
                }}
            >
                <animated.h3 className={css.client} style={{ height: clientHeight }}>
                    {client}
                </animated.h3>
            </animated.div>


            <Tools tools={builtWith} />
        </header>
    );
};

export default ProjectHeader;
