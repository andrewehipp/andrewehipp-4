import React from 'react';
import { Link } from 'react-router-dom';
import client from '../client';

import About from '../components/About';
import Card from '../components/Card';
import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

function compare(a,b) {
  if (a.order < b.order)
    return -1;
  if (a.order > b.order)
    return 1;
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
                <LayoutAside offset>
                    <About />
                </LayoutAside>
                <LayoutContent bleedTop bleedBottom>
                    <ProjectGrid>
                        {this.state.projects.map(project => (
                            <Link key={project.slug} to={`/projects/${project.slug}`}>
                                <Card {...project} />
                            </Link>
                        ))}
                    </ProjectGrid>
                </LayoutContent>
            </Layout>
        );
    }
}
