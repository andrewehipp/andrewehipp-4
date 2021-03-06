import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />

                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    {/* http://ogp.me/ */}
                    <meta property="og:title" content="Andrew Hipp - Front End Developer" />
                    <meta property="og:description" content="Director of Front End Development at Haven Agency in Ontario, Calif." />
                    <meta name="description" content="Director of Front End Development at Haven Agency in Ontario, Calif" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.andrewehipp.com" />
                    <meta property="og:image" content="https://www.andrewehipp.com/img/meta/share-icon-1024x1024.jpg" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/static/img/meta/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/img/meta/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/img/meta/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/img/meta/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/img/meta/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/img/meta/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/img/meta/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/img/meta/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/img/meta/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/static/img/meta/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/img/meta/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/img/meta/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/img/meta/favicon-16x16.png" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/img/meta/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
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
