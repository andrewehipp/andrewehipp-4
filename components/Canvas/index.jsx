import React from 'react';
import cc from 'classcat';
import scrollMonitor from 'scrollmonitor';

import ParticleEffect from './ParticleEffect';

import css from './canvas.scss';

const Canvas = React.memo(function Canvas({
    className,
    ...props
}) {
    const canvas = React.createRef();

    React.useEffect(() => {
        const effect = new ParticleEffect(canvas.current);

        const elementWatcher = scrollMonitor.create(canvas.current);

        elementWatcher.enterViewport(() => {
            effect.play();
        });

        elementWatcher.exitViewport(() => {
            effect.pause();
        });
    }, [true]);

    const classes = cc([
        css.canvas,
        className,
    ]);

    return (
        <canvas ref={canvas} className={classes} {...props} />
    );
});

export default Canvas;
