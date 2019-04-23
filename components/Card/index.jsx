import React from 'react';
import scrollMonitor from 'scrollmonitor';
import { useSpring, animated } from 'react-spring';
import imagesLoadad from 'imagesloaded';

import Aspect from '../Aspect';
import Image from '../Image';

import css from './card.scss';

const Card = ({
    fields: {
        name,
        client,
        slug,
        fullThumbnail: {
            fields: {
                file: {
                    url: thumbnailUrl = '',
                } = {},
            } = {},
        } = {},
    } = {},
    imageProps = {},
    delay = 0,
}) => {
    const card = React.createRef();

    const [props, set] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(50px)',
    }))


    React.useEffect(() => {
        const elementWatcher = scrollMonitor.create(card.current);

        elementWatcher.enterViewport(() => {
            imagesLoadad(card.current, () => {
                set({
                    opacity: 1,
                    transform: 'translateY(0)',
                    delay,
                });
            })
        });

        return () => {
            stop();
            elementWatcher.destroy();
        }
    });

    return (
        <animated.article style={props} ref={card} id={slug} className={css.card}>
            <Aspect modifiers="aspect-16x9">
                <Image
                    src={thumbnailUrl}
                    query="w=530"
                    alt={name}
                    className={css.cardImage}
                    {...imageProps}
                />
            </Aspect>
            <header className={css.cardHeader}>
                <h3 className={css.cardTitle}>{name}</h3>
                <h5 className={css.cardClient}>{client}</h5>
            </header>
        </animated.article>
    );
};

export default Card;
