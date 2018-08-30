import React from 'react';

import Aspect from '../Aspect';
import Video from '../Video';
import Image from '../Image';
import Appear from '../Appear';

import css from './browser.scss';

const Browser = ({ desktop, name = '' }) => (
    <Appear>
        <div className={css.browser}>
            <span className={css.title}>{name}</span>

            <Aspect {...desktop.fields.file.details.image} modifiers={desktop.fields.file.contentType === 'video/mp4' ? 'aspect-1440x900' : ''}>
                {desktop.fields.file.contentType === 'video/mp4' ? (
                    <Video loop muted playsInline>
                        <source src={`https:${desktop.fields.file.url}`} type={desktop.fields.file.contentType} />
                    </Video>
                ) : (
                    <Image src={`${desktop.fields.file.url}?w=800`} alt="" className={css.image} />
                )}
            </Aspect>
        </div>
    </Appear>
);

export default Browser;
