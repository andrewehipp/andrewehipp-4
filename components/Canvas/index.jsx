import React from 'react';
import cc from 'classcat';

import css from './canvas.scss';
import ParticleEffect from './ParticleEffect';


export default class Canvas extends React.Component {
    constructor() {
        super();

        this.canvas = React.createRef();
    }

    componentDidMount() {
        new ParticleEffect(this.canvas.current);
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

        console.log(classes)

        return (
            <canvas ref={this.canvas} className={classes} {...props} />
        );
    }
}
