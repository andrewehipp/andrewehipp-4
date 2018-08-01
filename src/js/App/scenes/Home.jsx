import React from 'react';
import { Link } from 'react-router-dom';
import client from '../client';

import Layer from '../components/Layer';
import About from '../components/About';
import Card from '../components/Card';
import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';
import Appear from '../components/Appear';

const layout = [
    0,
    6,
    7,
    12,
];

function compare(a, b) {
    if (a.order < b.order) {
        return -1;
    }
    if (a.order > b.order) {
        return 1;
    }
    return 0;
}

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
            'fields.featured[in]': true,
        })
            .then(projects => projects.items.map(project => project.fields))
            .then(projects => projects.sort(compare))
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
                    <Appear>
                        <About />
                    </Appear>
                </LayoutAside>
                <LayoutContent bleedTop bleedBottom>
                    <Layer>
                        <ProjectGrid layout={layout}>
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
