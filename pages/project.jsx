import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Card from '../components/Card';
import Layer from '../components/Layer';
import Layout from '../components/Layout';
import Markdown from '../components/Markdown';
import ProjectHeader from '../components/ProjectHeader';
import ScreenShot from '../components/ScreenShot';
import ProjectGrid from '../components/ProjectGrid';

import client from '../client';

import '../resources/scss/global.scss'

const Project = ({
    project,
    project: {
        fields: {
            name,
            builtWith = [],
            screenshots = [],
            description,
        } = {},
    } = {},
    nextProjects,
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
                    renderSidebar={() => (
                        <>
                            {screenshotIndex === 0 && (
                                <>
                                    <ProjectHeader {...project} />
                                    <ul>
                                    </ul>
                                    <Markdown>{description}</Markdown>
                                </>
                            )}
                            <Markdown>{screenshotDescription}</Markdown>
                        </>
                    )}
                    renderContent={() => (
                        <ScreenShot {...screenshotFields} />
                    )}
                    bleedTop={screenshotIndex === 0}
                />
            ))}
        </Layer>

        {nextProjects && (
            <Layer>
                <Layout
                    renderContent={() => (
                        <ProjectGrid
                            items={nextProjects}
                            renderItem={({
                                sys: {
                                    id: nextProjectId,
                                } = {},
                                fields: nextProjectFields,
                                fields: {
                                    slug: nextProjectSlug,
                                } = {},
                            }, projectIndex) => (
                                <Link
                                    key={nextProjectId}
                                    href={`/project?slug=${nextProjectSlug}`}
                                    as={`/projects/${nextProjectSlug}`}
                                >
                                    <a>
                                        <Card
                                            fields={nextProjectFields}
                                            imageProps={{
                                                loading: 'lazy'
                                            }}
                                        />
                                    </a>
                                </Link>
                            )}
                        />
                    )}
                    bleedBottom
                />
            </Layer>

        )}
    </>
);

Project.getInitialProps = async ({ query }) => {
    const project = await client.getEntries({
        content_type: 'project',
        'fields.slug[in]': query.slug,
    })
        .then(res => res.items[0]);

    const nextProjects = await client.getEntries({
        content_type: 'projectListing',
        'fields.name[in]': 'Home',
    })
        .then(({
            items: [
                {
                    fields: {
                        projects = [],
                    } = {}
                } = {}
            ] = []
        }) => projects)
        .then(projects => [...projects, ...projects])
        .then(projects => {
            let projectIndex = projects.findIndex(project => project.fields.slug === query.slug);

            if (projectIndex === -1) {
                return undefined;
            }

            console.log(projects, projects.length, projects.slice(projectIndex, 3))

            return projects.slice(projectIndex, projectIndex + 3);
        });

    return {
        project,
        nextProjects,
    };
};

export default Project;
