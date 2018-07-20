import React from 'react';

import Aspect from '../Aspect';

import css from './browser.scss'

const Browser = ({ desktop, name = '' }) => (
    <div className={css.browser}>
        <span className={css.title}>{name}</span>

        <Aspect {...desktop.fields.file.details.image} modifiers={desktop.fields.file.contentType === 'video/mp4' ? 'aspect-1440x900' : ''}>
            {desktop.fields.file.contentType === 'video/mp4' ? (
                <video autoPlay loop muted playsInline>
                    <source src={`https:${desktop.fields.file.url}`} type={desktop.fields.file.contentType} />
                </video>

            ) : (
                <img src={`https:${desktop.fields.file.url}?fm=webp`} alt="" className={css.image} />
            )}
        </Aspect>
    </div>
);

export default Browser;
