import React from 'react';

import Aspect from '../Aspect';
import Image from '../Image';

import css from './card.scss';

export default class Card extends React.Component {
    constructor() {
        super();

        this.card = React.createRef();
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        const transitions = window.getComputedStyle(this.card.current).transition;
        this.card.current.style.transition = `${transitions}, opacity 0.3s, transform 0.5s`;
    }

    onLoad() {
        window.requestAnimationFrame(() => {
            this.card.current.style.transform = '';
            this.card.current.style.opacity = '';
        });
    }

    render() {
        const {
            name,
            client,
            slug,
            fullThumbnail,
        } = this.props;

        return (
            <article ref={this.card} id={slug} className={css.card} style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <Aspect modifiers="aspect-16x9">
                    <Image src={`https:${fullThumbnail.fields.file.url}?w=530&h=299`} alt="" className={css.cardImage} onLoad={this.onLoad} />
                </Aspect>
                <header className={css.cardHeader}>
                    <h3 className={css.cardTitle}>{name}</h3>
                    <h5 className={css.cardClient}>{client}</h5>
                </header>
            </article>
        );
    }
}
