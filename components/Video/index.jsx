import React from 'react';
import scrollMonitor from 'scrollmonitor';

export default class Video extends React.Component {
    constructor() {
        super();

        this.video = React.createRef();
    }
    componentDidMount() {
        this.elementWatcher = scrollMonitor.create(this.video.current);

        this.elementWatcher.fullyEnterViewport(() => {
            console.log('test')
            this.video.current.play();
        });

        this.elementWatcher.exitViewport(() => {
            this.video.current.pause();
            this.video.current.currentTime = 0;
        });

        this.elementWatcher.triggerCallbacks();
    }

    componentWillUnmount() {
        this.elementWatcher.destroy();
    }

    render() {
        const {
            children,
            ...props
        } = this.props;

        return (
            // eslint-disable-next-line
            <video ref={this.video} {...props} muted>
                {children}
            </video>
        );
    }
}
