import React from 'react';

import Aspect from '../Aspect';
import Image from '../Image';
import Video from '../Video';

import css from './mobile.module.scss';

const Mobile = ({
    mobile: {
        fields: {
            file: {
                contentType,
                url = '',
            } = {},
        } = {},
    } = {},
}) => (
    <div className={css.mobile}>
        <div className={css.inner}>
            <Aspect modifiers="aspect-iphone6">
                {contentType === 'video/mp4' ? (
                    <Video loop muted playsInline>
                        <source src={`https:${url}`} type="video/mp4" />
                    </Video>
                ) : (
                    <Image src={url} query="w=210" alt="" className={css.image} />
                )}
            </Aspect>
        </div>
    </div>
);

export default Mobile;
