import React from 'react';

import Aspect from '../Aspect';

import css from './card.scss';

const Card = ({ name, client, slug, smallThumbnail, fullThumbnail }) => (
    <article id={slug} className={css.card}>
        <Aspect modifiers="aspect-16x9">
            <img src={`https:${fullThumbnail.fields.file.url}?fm=webp`} alt="" className={css.cardImage} />
        </Aspect>
        <header className={css.cardHeader}>
            <h3 className={css.cardTitle}>{name}</h3>
            <h5 className={css.cardClient}>{client}</h5>
        </header>
    </article>
);


export default Card;