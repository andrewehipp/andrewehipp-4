import React from 'react';

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
}) => (
    <article id={slug} className={css.card}>
        <Aspect modifiers="aspect-16x9">
            <Image src={`${thumbnailUrl}?w=530`} alt="" className={css.cardImage} />
        </Aspect>
        <header className={css.cardHeader}>
            <h3 className={css.cardTitle}>{name}</h3>
            <h5 className={css.cardClient}>{client}</h5>
        </header>
    </article>
);

export default Card;
