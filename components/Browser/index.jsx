import React from 'react';

import Aspect from '../Aspect';
import Video from '../Video';
import Image from '../Image';

import css from './browser.scss';

const Browser = ({
    desktop: {
        fields: {
            file: {
                contentType,
                details: {
                    image: {
                        width,
                        height,
                    } = {},
                } = {},
                url = '',
            } = {},
        } = {},
    } = {},
    name = '',
}) => (
    <div className={css.browser}>
        <span className={css.title}>{name}</span>

        <Aspect
            width={width}
            height={height}
            modifiers={contentType === 'video/mp4' ? 'aspect-1440x900' : ''}
        >
            {contentType === 'video/mp4' ? (
                <Video loop muted playsInline>
                    <source src={`https:${url}`} type={contentType} />
                </Video>
            ) : (
                <Image src={`${url}?w=800`} alt="" className={css.image} />
            )}
        </Aspect>
    </div>
);

export default Browser;