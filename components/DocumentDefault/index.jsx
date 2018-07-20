import React from 'react';

import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';

const DocumentDefault = ({ children, ...props }) => (
    <React.Fragment>
        <Header {...props} />
        <Container>
            {children}
        </Container>
        <Footer />
    </React.Fragment>
);


export default DocumentDefault;
