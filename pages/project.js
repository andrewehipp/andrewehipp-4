import React from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import DocumentDefault from '../components/DocumentDefault';
import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import ProjectHeader from '../components/ProjectHeader';
import Browser from '../components/Browser';
import Mobile from '../components/Mobile';

import css from '../resources/css/global.scss';

export default class Products extends React.Component {
    static async getInitialProps({ req, query }) {
        return {
            query,
        };
    }

    render() {
        const {
            query,
        } = this.props;

        return (
            <React.Fragment>
                <Head>
                  <title>{query.title}</title>
                </Head>
                <DocumentDefault {...this.props}>

                    {query.project.screenshots.map((screenshot, screenshotIndex) => (
                        <Layout key={screenshot.sys.id}>
                            <LayoutAside>
                                {screenshotIndex === 0 && (
                                    <ProjectHeader {...query.project}/>
                                )}
                                <ReactMarkdown source={screenshot.fields.description} />
                            </LayoutAside>
                            <LayoutContent>
                                <Browser {...screenshot.fields} />

                                {screenshot.fields.mobile && (
                                    <Mobile {...screenshot.fields} />
                                )}
                            </LayoutContent>
                        </Layout>
                    ))}
                </DocumentDefault>
            </React.Fragment>
        );
    }
}
