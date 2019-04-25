import React from 'react';
import scrollMonitor from 'scrollmonitor';

const Video = ({
    children,
    ...props
}) => {
    const video = React.createRef();

    React.useEffect(() => {
        const elementWatcher = scrollMonitor.create(video.current);

        elementWatcher.fullyEnterViewport(() => {
            video.current.play();
        });

        elementWatcher.exitViewport(() => {
            video.current.pause();
            video.current.currentTime = 0;
        });

        elementWatcher.triggerCallbacks();

        return () => {
            elementWatcher.destroy();
        }
    }, [true]);

    return (
        // eslint-disable-next-line
        <video ref={video} {...props} muted>
            {children}
        </video>
    );
}

export default Video;
