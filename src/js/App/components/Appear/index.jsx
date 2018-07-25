import React from 'react';


export default class Appear extends React.Component {
    constructor() {
        super();

        this.element = React.createRef();
        // this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        const transitions = window.getComputedStyle(this.element.current).transition;
        this.element.current.style.transition = `${transitions}, opacity 0.3s, transform 0.5s`;

        const images = [...this.element.current.querySelectorAll('img')];

        const imagePromises = images.map(img => new Promise((res) => { img.onload = res; }));

        Promise.all(imagePromises)
            .then(() => {
                window.requestAnimationFrame(() => {
                    this.element.current.style.transform = '';
                    this.element.current.style.opacity = '';
                });
            });
    }

    // onReady() {
    // }

    render() {
        const {
            children,
            ...props
        } = this.props;

        return (
            <article ref={this.element} style={{ opacity: 0, transform: 'translateY(20px)' }} {...props}>
                {children}
            </article>
        );
    }
}
