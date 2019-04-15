import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

import Layout from '../components/Layout';
import Layer from '../components/Layer';
import ProjectHeader from '../components/ProjectHeader';
import ScreenShot from '../components/ScreenShot';

import client from '../client';

import '../resources/scss/global.scss'

const Project = ({
    project,
    project: {
        fields: {
            name,
            screenshots = [],
            description,
        } = {},
    } = {},
}) => (
    <>
        <Head>
            <title>{name} | Andrew Hipp - Front End Developer</title>
        </Head>
        <Layer>
            {screenshots.map(({
                sys: {
                    id: screenshotId,
                } = {},
                fields: screenshotFields,
                fields: {
                    description: screenshotDescription,
                } = {},
            }, screenshotIndex) => (
                <Layout
                    key={screenshotId}
                    bleedTop={screenshotIndex === 0}
                    bleedBottom={screenshotIndex === screenshots.length - 1}
                    renderSidebar={() => (
                        <>
                            {screenshotIndex === 0 && (
                                <>
                                    <ProjectHeader {...project} />
                                    <ReactMarkdown source={description} />
                                </>
                            )}
                            <ReactMarkdown source={screenshotDescription} />
                        </>
                    )}
                    renderContent={() => (
                        <ScreenShot {...screenshotFields} />
                    )}
                />
            ))}
        </Layer>
    </>
);

Project.getInitialProps = async ({ query }) => {
    const project = await client.getEntries({
        content_type: 'project',
        'fields.slug[in]': query.slug,
    })

    return {
        project: project.items[0],
    }
};

export default Project;
