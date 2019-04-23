import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import About from '../components/About';
import Card from '../components/Card';
import Layer from '../components/Layer';
import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

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
    <Layout
        bleedTop
        bleedBottom
        renderContent={() => (
            <Layer>
                <ProjectGrid
                    layout={layout}
                    items={projects}
                    renderItem={({
                        sys: {
                            id: projectId,
                        } = {},
                        fields,
                        fields: {
                            slug,
                        } = {},
                    }, projectIndex) => (
                        <Link
                            key={projectId}
                            href={`/project?slug=${slug}`}
                            as={`/projects/${slug}`}
                        >
                            <a>
                                <Card
                                    fields={fields}
                                    imageProps={{
                                        loading: projectIndex < 7 ? 'eager' : 'lazy'
                                    }}
                                    delay={32 * projectIndex}
                                />
                            </a>
                        </Link>
                    )}
                />
            </Layer>
        )}
        renderSidebar={() => (
            <About />
        )}
    />
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
