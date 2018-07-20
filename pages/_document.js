import Document, { Head, Main, NextScript } from "next/document";

import css from '../resources/css/global.scss';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <title>{this.props.__NEXT_DATA__.query.title}</title>

                    <meta property="og:title" content="Hatchimals" />
                    <meta property="og:description" content="" />
                    <meta name="description" content="" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="" />
                    <meta property="og:image" content="" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"/>
                    <link rel="stylesheet" href="/_next/static/style.css" />

                    <link rel="icon" type="image/png" href="/static/img/meta/favicon-16x16.png" sizes="16x16" />

                    <script src="/static/js/modernizr.js" />
                </Head>
                <body>
                    <script dangerouslySetInnerHTML={{__html: `
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                        ga('create', 'UA-29489442-1', 'auto');
                        ga('send', 'pageview');
                    `}} />

                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
