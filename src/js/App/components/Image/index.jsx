import React from 'react';
import scrollMonitor from 'scrollmonitor';

export default class Image extends React.Component {
    constructor() {
        super();

        this.image = React.createRef();
        this.state = {
            inView: false,
        };
    }

    componentDidMount() {
        this.elementWatcher = scrollMonitor.create(this.image.current);

        this.elementWatcher.enterViewport(() => {
            this.setState({
                inView: true,
            });
        });

        this.elementWatcher.triggerCallbacks();
    }

    componentWillUnmount() {
        this.elementWatcher.destroy();
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
