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
    imageProps = {},
}) => (
    <article id={slug} className={css.card}>
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
    </article>
);

export default Card;
