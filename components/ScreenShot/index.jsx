import React from 'react';

import Browser from '../Browser';
import Mobile from '../Mobile';

import css from './screenshot.scss';

const ScreenShot = ({
    name,
    desktop,
    mobile,
}) => (
    <div className={css.screenshot}>
        <div className={css.desktop}>
            <Browser desktop={desktop} name={name} />
        </div>

        {mobile &&
            <div className={css.mobile}>
                <Mobile mobile={mobile} />
            </div>
        }
    </div>
);

export default ScreenShot;
