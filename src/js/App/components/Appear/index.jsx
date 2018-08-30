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

        Promise.all(imagePromises)
            .then(() => {
                window.setTimeout(() => {
                    window.requestAnimationFrame(() => {
                        this.element.current.style.opacity = '';
                    });
                }, this.props.delay || 0);
            });
    }

    render() {
        const {
            children,
            ...props
        } = this.props;

        return (
            <article ref={this.element} style={{ opacity: 0 }} {...props}>
                {children}
            </article>
        );
    }
}
