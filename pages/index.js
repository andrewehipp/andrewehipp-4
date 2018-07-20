import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import DocumentDefault from '../components/DocumentDefault';
import About from '../components/About';
import Card from '../components/Card';
import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

export default class Home extends React.Component {
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
                <DocumentDefault>
                    <Layout>
                        <LayoutAside>
                            <About />
                        </LayoutAside>
                        <LayoutContent>
                            <ProjectGrid>
                                {query.projects.map((project) => (
                                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                                        <a>
                                            <Card {...project} />
                                        </a>
                                    </Link>
                                ))}
                            </ProjectGrid>
                        </LayoutContent>
                    </Layout>

                    {/* <pre>{JSON.stringify(query.projects, 4, 4)}</pre> */}
                </DocumentDefault>
            </React.Fragment>
        );
    }
}
