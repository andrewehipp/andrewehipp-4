import React from 'react';

const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
};

export default class Video extends React.Component {
    constructor() {
        super();

        this.video = React.createRef();
    }
    componentDidMount() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                    entry.target.currentTime = 0;
                }
            });
        }, options);

        observer.observe(this.video.current);
    }

    render() {
        const {
            children,
            ...props
        } = this.props;

        return (
            // eslint-disable-next-line
            <video {...props} ref={this.video}>
                {children}
            </video>
        );
    }
}
