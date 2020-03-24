import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useSpring, animated } from 'react-spring';

import Card from '../../components/Card';
import Layer from '../../components/Layer';
import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';
import ProjectHeader from '../../components/ProjectHeader';
import ScreenShot from '../../components/ScreenShot';
import ProjectGrid from '../../components/ProjectGrid';

import client from '../../client';

const Project = ({
    project,
    project: {
        fields: {
            name,
            screenshots = [],
            description,
        } = {},
    } = {},
    nextProjects,
}) => {
    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        delay: 1000,
    });

    return (
        <>
            <Head>
                <title>
                    {name}
                    {' '}
                    | Andrew Hipp - Front End Developer
                </title>
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
                                            <ul />
                                            <animated.div style={props}>
                                                <Markdown>{description}</Markdown>
                                            </animated.div>
                                        </>
                                    )}
                                    <animated.div style={props}>
                                        <Markdown>{screenshotDescription}</Markdown>
                                    </animated.div>
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
                                                    delay={80 * projectIndex}
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
};

export async function getStaticPaths() {
    const projects = await client.getEntries({
        content_type: 'project',
    })
        .then((res) => res.items)
        .then((res) => res.map(({
            fields: {
                slug,
            } = {},
        }) => ({
            params: {
                slug,
            },
        })));

    return {
        paths: projects,
        fallback: false, // See the "fallback" section below
    };
}

export async function getStaticProps({ params }) {
    const project = await client.getEntries({
        content_type: 'project',
        'fields.slug[in]': params.slug,
    })
        .then((res) => res.items[0]);

    const nextProjects = await client.getEntries({
        content_type: 'projectListing',
        'fields.name[in]': 'Home',
    })
        .then(({
            items: [
                {
                    fields: {
                        projects = [],
                    } = {},
                } = {},
            ] = [],
        }) => projects)
        .then((projects) => [...projects, ...projects])
        .then((projects) => {
            const projectIndex = projects.findIndex((p) => p.fields.slug === params.slug);

            if (projectIndex === -1) {
                return null;
            }

            return projects.slice(projectIndex + 1, projectIndex + 4);
        });

    return {
        props: {
            project,
            nextProjects,
        },
    };
}

export default Project;
