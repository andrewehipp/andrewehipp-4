import React from 'react';
import scrollMonitor from 'scrollmonitor';

export default class Video extends React.Component {
    constructor() {
        super();

        this.video = React.createRef();
    }
    componentDidMount() {
        this.elementWatcher = scrollMonitor.create(this.video.current);

        this.elementWatcher.enterViewport(() => {
            this.video.current.play();
        });

        this.elementWatcher.partiallyExitViewport(() => {
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
            <video {...props} ref={this.video}>
                {children}
            </video>
        );
    }
}
