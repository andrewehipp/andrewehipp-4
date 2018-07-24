import React from 'react';

import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';

const DocumentDefault = ({ children }) => (
    <React.Fragment>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </React.Fragment>
);


export default DocumentDefault;
