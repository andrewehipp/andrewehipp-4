import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import Layer from '../components/Layer';
import ProjectHeader from '../components/ProjectHeader';
import Browser from '../components/Browser';
import Mobile from '../components/Mobile';

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
                    mobile: screenshotMobile,
                    description: screenshotDescription,
                } = {},
            }, screenshotIndex) => (
                <Layout key={screenshotId}>
                    <LayoutAside>
                        {screenshotIndex === 0 && (
                            <ProjectHeader {...project} />
                        )}
                        {screenshotIndex === 0 && (
                            <ReactMarkdown source={description} />
                        )}
                        <ReactMarkdown source={screenshotDescription} />
                    </LayoutAside>
                    <LayoutContent
                        bleedTop={screenshotIndex === 0}
                        bleedBottom={screenshotIndex === screenshots.length - 1}
                    >
                        <Browser {...screenshotFields} />

                        {screenshotMobile && (
                            <Mobile {...screenshotFields} />
                        )}
                    </LayoutContent>
                </Layout>
            ))}
        </Layer>
    </>
);

Project.getInitialProps = async ({ query }) => {
    const project = await client.getEntries({
        content_type: 'project',
        'fields.slug[in]': query.slug,
    })

    console.log(project.items[0])

    return {
        project: project.items[0],
    }
};

export default Project;
