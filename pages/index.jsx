import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layer from '../components/Layer';
import About from '../components/About';
import Card from '../components/Card';
import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';
import Appear from '../components/Appear';

import client from '../client';

import '../resources/scss/global.scss'

const layout = {
    0: { wide: true },
    1: { align: 'bottom' },
    6: { wide: true },
    7: { wide: true },
    13: { wide: true },
};

const Home = ({ projects = [] }) => (
    <Layout>
        <LayoutAside>
            <Appear>
                <About />
            </Appear>
        </LayoutAside>
        <LayoutContent bleedTop bleedBottom>
            <Layer>
                <ProjectGrid layout={layout}>
                    {projects.map(({
                        sys: {
                            id: projectId,
                        } = {},
                        fields,
                        fields: {
                            slug,
                        } = {},
                    }) => (
                        <Link
                            key={projectId}
                            href={`/project?slug=${slug}`}
                            as={`/projects/${slug}`}
                        >
                            <a>
                                <Card fields={fields} />
                            </a>
                        </Link>
                    ))}
                </ProjectGrid>
            </Layer>
        </LayoutContent>
    </Layout>
);

Home.getInitialProps = async () => {
    const projects = await client.getEntries({
        content_type: 'projectListing',
        'fields.name[in]': 'Home',
    })
        .then(res => res.items[0].fields.projects)

    return {
        projects,
    }
};

export default Home;
