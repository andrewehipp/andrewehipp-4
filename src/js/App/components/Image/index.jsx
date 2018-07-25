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
        this.state = {
            inView: false,
        };
    }

    componentDidMount() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setState({
                        inView: true,
                    });

                    observer.unobserve(this.image.current);
                }
            });
        }, options);

        observer.observe(this.image.current);
    }

    render() {
        const {
            src = '',
            alt = '',
            ...props
        } = this.props;

        const query = src.indexOf('?') !== -1 ? '&' : '?';

        return (
            <picture>
                <source srcSet={!this.state.inView ? '' : `${src}${query}fm=webp`} type="image/webp" />
                <img ref={this.image} src={!this.state.inView ? '' : src} alt={alt} {...props} />
            </picture>
        );
    }
}
