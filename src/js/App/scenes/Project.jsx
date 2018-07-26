import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Layout, LayoutAside, LayoutContent } from '../components/Layout';
import Layer from '../components/Layer';
import ProjectHeader from '../components/ProjectHeader';
import Browser from '../components/Browser';
import Mobile from '../components/Mobile';
import Appear from '../components/Appear';

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
        if (!this.state.project) { return null; }

        return (
            <Layer>
                {this.state.project.screenshots.map((screenshot, screenshotIndex) => (
                    <Layout key={screenshot.sys.id}>
                        <LayoutAside>
                            <Appear>
                                {screenshotIndex === 0 && (
                                    <ProjectHeader {...this.state.project} />
                                )}
                                <ReactMarkdown source={screenshot.fields.description} />
                            </Appear>
                        </LayoutAside>
                        <LayoutContent bleedTop={screenshotIndex === 0} bleedBottom={screenshotIndex === this.state.project.screenshots.length - 1}>
                            <Appear>
                                <Browser {...screenshot.fields} />

                                {screenshot.fields.mobile && (
                                    <Mobile {...screenshot.fields} />
                                )}
                            </Appear>
                        </LayoutContent>
                    </Layout>
                ))}
                {/* <pre>{JSON.stringify(query.projects, 4, 4)}</pre> */}
            </Layer>
        );
    }
}
