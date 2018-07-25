import React from 'react';

import Aspect from '../Aspect';
import Image from '../Image';

import css from './card.scss';

const Card = ({ name, client, slug, fullThumbnail }) => (
    <article id={slug} className={css.card}>
        <Aspect modifiers="aspect-16x9">
            <Image src={`https:${fullThumbnail.fields.file.url}?fm=webp&w=530&h=299`} alt="" className={css.cardImage} />
        </Aspect>
        <header className={css.cardHeader}>
            <h3 className={css.cardTitle}>{name}</h3>
            <h5 className={css.cardClient}>{client}</h5>
        </header>
    </article>
);


export default Card;
