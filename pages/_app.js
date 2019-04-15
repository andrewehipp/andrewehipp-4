import React from 'react';
import App, { Container as AppContainer } from 'next/app';

import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <AppContainer>
                <Header />
                <Container>
                    <Component {...pageProps} />
                </Container>
                <Footer />
            </AppContainer>
        );
    }
}

export default MyApp;
