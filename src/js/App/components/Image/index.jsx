import React from 'react';

const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
};

export default class Image extends React.Component {
    constructor() {
        super();

        this.image = React.createRef();
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        const transitions = window.getComputedStyle(this.image.current).transition;
        this.image.current.style.transition = `${transitions}, opacity 0.3s`;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.image.current.src = this.props.src;
                    observer.unobserve(this.image.current);
                }
            });
        }, options);

        observer.observe(this.image.current);
    }

    onLoad() {
        window.requestAnimationFrame(() => {
            this.image.current.style.opacity = '1';
        });
    }

    render() {
        const {
            src,
            alt = '',
            ...props
        } = this.props;

        const query = src.indexOf('?') !== -1 ? '&' : '?';

        return (
            <picture>
                <source srcSet={`${src}${query}fm=webp`} type="image/webp" />
                <img ref={this.image} src={src} alt={alt} {...props} onLoad={this.onLoad} style={{ opacity: 0 }} />
            </picture>
        );
    }
}
