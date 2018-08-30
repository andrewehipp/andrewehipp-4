import React from 'react';

import Container from '../Container';
import Canvas from '../Canvas';
import Layer from '../Layer';

import css from './footer.scss';

const Footer = () => (
    <footer className={css.footer}>
        <Canvas className={css.canvas} />

        <Container>
            <Layer>
                <p>
                    Need to improve your web presence or an employer looking to hire?<br />
                    <a href="mailto:andrewehipp@gmail.com?subject=Referral from andrewehipp.com">Please get in touch</a>.
                </p>

                <p><small>Built with React, Netlify, and Contentful.</small></p>

                <p><small>&copy; Andrew Hipp {new Date().getFullYear()}</small></p>
            </Layer>
        </Container>
    </footer>
);

export default Footer;
