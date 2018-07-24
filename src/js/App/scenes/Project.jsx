import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import ProjectHeader from '../components/ProjectHeader';
import Browser from '../components/Browser';
import Mobile from '../components/Mobile';

import client from '../client';

export default class Project extends React.Component {
    constructor() {
        super();

        this.state = {
            project: false,
        };
    }

    componentDidMount() {
        client.getEntries({
            content_type: 'project',
            'fields.slug[in]': this.props.match.params.slug,
        })
            .then(projects => projects.items.map(project => project.fields))
            .then((projects) => {
                this.setState({
                    project: projects[0],
                });
            });
    }

    render() {
        console.log(this.state.project);
        if (!this.state.project) { return null; }
        return (
            <React.Fragment>
                {this.state.project.screenshots.map((screenshot, screenshotIndex) => (
                    <Layout key={screenshot.sys.id}>
                        <LayoutAside>
                            {screenshotIndex === 0 && (
                                <ProjectHeader {...this.state.project} />
                            )}
                            <ReactMarkdown source={screenshot.fields.description} />
                        </LayoutAside>
                        <LayoutContent>
                            <Browser {...screenshot.fields} />

                            {screenshot.fields.mobile && (
                                <Mobile {...screenshot.fields} />
                            )}
                        </LayoutContent>
                    </Layout>
                ))}
                {/* <pre>{JSON.stringify(query.projects, 4, 4)}</pre> */}
            </React.Fragment>
        );
    }
}
