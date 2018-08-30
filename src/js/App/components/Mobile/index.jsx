import React from 'react';

import Aspect from '../Aspect';
import Video from '../Video';
import Image from '../Image';
import Appear from '../Appear';

import css from './mobile.scss';

const Mobile = ({ mobile }) => (
    <Appear>
        <div className={css.mobile}>
            <div className={css.inner}>
                <Aspect modifiers="aspect-iphone6">
                    {mobile.fields.file.contentType === 'video/mp4' ? (
                        <Video loop muted playsInline>
                            <source src={`https:${mobile.fields.file.url}`} type="video/mp4" />
                        </Video>

                    ) : (
                        <Image src={`https:${mobile.fields.file.url}?fm=webp&w=210`} alt="" className={css.image} />
                    )}
                </Aspect>
            </div>
        </div>
    </Appear>
);

export default Mobile;
