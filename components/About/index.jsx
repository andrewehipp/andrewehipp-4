import React from 'react';
import { useTrail, useSpring, useChain, animated } from 'react-spring'

import css from './about.module.scss';

const About = () => {
    const lines = [
        'Front End Developer',
        'Haven Agency',
        'Ontario, California',
    ];

    const trailRef = React.useRef();
    const trail = useTrail(lines.length, {
        x: 0,
        height: 48,
        from: {
            x: 48,
            height: 0,
        },
        ref: trailRef,
    });

    const springRef = React.useRef();
    const spring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        ref: springRef,
    });

    useChain([trailRef, springRef], [0, 0.5]);

    return (
        <div>
            <h1 className={css.title}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.span
                        key={lines[index]}
                        className={css.lineOuter}
                        style={{
                            ...rest,
                            transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                        }}
                    >
                        <animated.span
                            className={css.lineInner}
                            style={{
                                height,
                            }}
                        >
                            {lines[index]}
                        </animated.span>
                    </animated.span>
                ))}
            </h1>

            <animated.div style={spring}>
                <p>Ten years as a Front End Developer building highly optimized, responsive, localized websites.</p>
                <p>Currently building sites with <strong>Next.js</strong>, <strong>CSS Modules</strong>, <strong>ES6</strong>, and <strong>Webpack</strong>.</p>
                <p>Previously six years as a Web Designer with a B.F.A in Graphic Design.</p>
            </animated.div>
        </div>
    )
};

export default About;
