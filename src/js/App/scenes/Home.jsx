import React from 'react';
import { Link } from 'react-router-dom';
import client from '../client';

import Layer from '../components/Layer';
import About from '../components/About';
import Card from '../components/Card';
import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';
import Appear from '../components/Appear';

// const layout = [
//     0,
//     6,
//     7,
//     13,
// ];

const layout = {
    0: { wide: true },
    1: { align: 'bottom' },
    6: { wide: true },
    7: { wide: true },
    13: { wide: true },
};

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
        client.getEntries({
            content_type: 'projectListing',
            'fields.name[in]': 'Home',
        })
            .then(res => res.items[0].fields.projects)
            .then(res => res.map(item => item.fields))
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
