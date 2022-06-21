import React from 'react';
import scrollMonitor from 'scrollmonitor';
import { useSpring, animated } from 'react-spring';
import imagesLoadad from 'imagesloaded';

import Browser from '../Browser';
import Mobile from '../Mobile';

import css from './screenshot.module.scss';

const ScreenShot = ({
    name,
    desktop,
    mobile,
}) => {
    const screenshot = React.createRef();

    const [props, set] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(50px) scale(0.98)',
    }));

    const [mobileProps, setMobile] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(50px)',
    }));

    React.useEffect(() => {
        const elementWatcher = scrollMonitor.create(screenshot.current);

        elementWatcher.enterViewport(() => {
            imagesLoadad(screenshot.current, () => {
                set({
                    opacity: 1,
                    transform: 'translateY(0) scale(1)',
                });
                setMobile({
                    opacity: 1,
                    transform: 'translateY(0)',
                    delay: 50,
                });
            });
        });

        return () => {
            elementWatcher.destroy();
        };
    }, [name]);

    return (
        <animated.div style={props} className={css.screenshot} ref={screenshot}>
            <div className={css.desktop}>
                <Browser desktop={desktop} name={name} />
            </div>

            {mobile ? (
                <animated.div style={mobileProps} className={css.mobile}>
                    <Mobile mobile={mobile} />
                </animated.div>
            ) : null}
        </animated.div>
    );
};

export default ScreenShot;
