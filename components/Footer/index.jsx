import React from 'react';

import Container from '../Container';

import css from './footer.scss';

const Footer = () => (
    <footer className={css.footer}>
        <div className="o-on-top">
            <p>Need to improve your web presence or an employer looking to hire?<br />
            <a href="mailto:andrewehipp@gmail.com?subject=Website referal">Please get in touch</a>.</p>

            <p><small>&copy; Andrew Hipp {new Date().getFullYear()}</small></p>
        </div>
    </footer>
);

export default Footer;