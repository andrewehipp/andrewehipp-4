import React from 'react';
import cc from 'classcat';
import scrollMonitor from 'scrollmonitor';

import css from './canvas.scss';
import ParticleEffect from './ParticleEffect';


export default class Canvas extends React.Component {
    constructor() {
        super();

        this.canvas = React.createRef();
    }

    componentDidMount() {
        if (window) {
            this.effect = new ParticleEffect(this.canvas.current);

            this.elementWatcher = scrollMonitor.create(this.canvas.current);

            this.elementWatcher.enterViewport(() => {
                this.effect.play();
            });

            this.elementWatcher.exitViewport(() => {
                this.effect.pause();
            });
        }
    }

    render() {
        const {
            className,
            ...props
        } = this.props;

        const classes = cc([
            css.canvas,
            className,
        ]);

        return (
            <canvas ref={this.canvas} className={classes} {...props} />
        );
    }
}
