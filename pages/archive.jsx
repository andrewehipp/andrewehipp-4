import React from 'react';
import Link from 'next/link';

import Card from '../components/Card';
import Layer from '../components/Layer';
import ProjectGrid from '../components/ProjectGrid';

import client from '../client';

import '../resources/scss/global.scss'

const Home = ({ projects = [] }) => (
    <Layer>
        <ProjectGrid
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
                            delay={32 * projectIndex}
                        />
                    </a>
                </Link>
            )}
        />
    </Layer>
);

Home.getInitialProps = async () => {
    const projects = await client.getEntries({
        content_type: 'project',
    })
        .then(res => res.items)

    return {
        projects,
    }
};

export default Home;
