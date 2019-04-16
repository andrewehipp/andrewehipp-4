import React from 'react';


import css from './screenshot.scss';

const ScreenShot = ({
    name,
    desktop,
    mobile,
}) => (
    <div className={css.screenshot}>
        <div className={css.desktop}>
        </div>

        {mobile &&
            <div className={css.mobile}>
            </div>
        }
    </div>
);

export default ScreenShot;
