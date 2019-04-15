import React from 'react';

import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';

import css from './document.scss';

const DocumentDefault = ({ children }) => (
    <React.Fragment>
        <Header />
        <Container>
            <div className={css.document}>
                {children}
            </div>
        </Container>
        <Footer />
    </React.Fragment>
);


export default DocumentDefault;
