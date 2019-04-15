import React from 'react';


export default class Appear extends React.Component {
    constructor() {
        super();

        this.element = React.createRef();
    }

    componentDidMount() {
        const transitions = window.getComputedStyle(this.element.current).transition;
        this.element.current.style.transition = `${transitions}, opacity 0.3s`;

        const images = [...this.element.current.querySelectorAll('img')];

        const imagePromises = images.map(img => new Promise((res) => { img.onload = res; }));

        if (this.element.current) {
            Promise.all(imagePromises)
                .then(() => {
                    this.timeout = window.setTimeout(() => {
                        this.raf = window.requestAnimationFrame(() => {
                            if (this.element.current) {
                                this.element.current.style.opacity = '';
                            }
                        });
                    }, this.props.delay || 0);
                });
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.timeout);
        window.cancelAnimationFrame(this.raf);
    }

    render() {
        const {
            children,
            ...props
        } = this.props;

        return (
            <div ref={this.element} style={{ opacity: 0 }} {...props}>
                {children}
            </div>
        );
    }
}
