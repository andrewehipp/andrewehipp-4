import React from 'react';

import Aspect from '../Aspect';

import css from './mobile.scss'

const Mobile = ({ mobile }) => (
    <div className={css.mobile}>
        <div className={css.inner}>
            <Aspect modifiers="aspect-iphone6">
                {mobile.fields.file.contentType === 'video/mp4' ? (
                    <video autoPlay loop muted playsInline>
                        <source src={`https:${mobile.fields.file.url}`} type="video/mp4" />
                    </video>

                ) : (
                    <img src={`https:${mobile.fields.file.url}?fm=webp`} alt="" className={css.image} />
                )}
            </Aspect>
        </div>
    </div>
);

export default Mobile;
