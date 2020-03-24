import React from 'react';
import scrollMonitor from 'scrollmonitor';
import imagesLoadad from 'imagesloaded';

import Aspect from '../Aspect';
import Image from '../Image';

import css from './card.module.scss';

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
    delay = 0,
}) => {
    const card = React.createRef();

    React.useEffect(() => {
        const elementWatcher = scrollMonitor.create(card.current);

        elementWatcher.enterViewport(() => {
            imagesLoadad(card.current, () => {
                card.current.classList.add('is-loaded');
            });
        });

        return () => {
            elementWatcher.destroy();
        };
    }, [name]);

    return (
        <article ref={card} id={slug} className={css.card} style={{ transitionDelay: `${delay}ms` }}>
            <Aspect modifiers="aspect-16x9">
                <Image
                    src={thumbnailUrl}
                    query="w=530"
                    alt={name}
                    className={css.cardImage}
                />
            </Aspect>
            <header className={css.cardHeader}>
                <h3 className={css.cardTitle}>{name}</h3>
                <h5 className={css.cardClient}>{client}</h5>
            </header>
        </article>
    );
};

export default Card;
