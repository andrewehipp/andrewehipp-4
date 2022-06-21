import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../resources/scss/global.scss';

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
            <div>
                <Head>
                    <title>Andrew Hipp - Front End Developer</title>
                </Head>

                <Header />

                <Container>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} />
                </Container>

                <Footer />
            </div>
        );
    }
}

export default MyApp;
