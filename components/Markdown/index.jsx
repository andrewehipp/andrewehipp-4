const SimpleMarkdown = require('simple-markdown');

const rules = {
    ...SimpleMarkdown.defaultRules,
    paragraph: {
        ...SimpleMarkdown.defaultRules.paragraph,
        react: (node, output, state) => {
            return <p key={state.key}>{output(node.content, state)}</p>;
        }
    }
};


const parser = SimpleMarkdown.parserFor(rules);
const reactOutput = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'));

const Markdown = ({ children }) => children ? reactOutput(parser(children)) : null;

export default Markdown;
