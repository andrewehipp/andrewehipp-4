import React from 'react';

const SimpleMarkdown = require('simple-markdown');

const rules = {
    ...SimpleMarkdown.defaultRules,
    paragraph: {
        ...SimpleMarkdown.defaultRules.paragraph,
        // eslint-disable-next-line react/display-name
        react: (node, output, state) => <p key={state.key}>{output(node.content, state)}</p>,
    },
};

const parser = SimpleMarkdown.parserFor(rules);
const reactOutput = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'));

const Markdown = ({ children }) => (children ? reactOutput(parser(children)) : null);

export default Markdown;
