import React from 'react';
import { Link } from 'react-router-dom';
import client from '../client';

import Card from '../components/Card';
import Layer from '../components/Layer';
import ProjectGrid from '../components/ProjectGrid';
import { Layout, LayoutAside, LayoutContent } from '../components/Layout';


export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
        client.getEntries({
            content_type: 'project',
        })
            .then(projects => projects.items.map(project => project.fields))
            .then((projects) => {
                this.setState({
                    projects,
                });
            });
    }

    render() {
        return (
            <Layout>
                <LayoutAside>
                    <h1>Archive</h1>

                    <p>All projects ever featured in my portfolio in no particular order.</p>
                </LayoutAside>
                <LayoutContent bleedTop bleedBottom>
                    <Layer>
                        <ProjectGrid>
                            {this.state.projects.map(project => (
                                <Link key={project.slug} to={`/projects/${project.slug}`}>
                                    <Card {...project} />
                                </Link>
                            ))}
                        </ProjectGrid>
                    </Layer>
                </LayoutContent>
            </Layout>
        );
    }
}
