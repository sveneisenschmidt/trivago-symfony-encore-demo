
const React = require('react');
const ReactDOM = require('react-dom');

function RenderedWith(props) {
    return <span>Rendered with {props.with}!</span>;
}

ReactDOM.render(
    <RenderedWith with="React" />,
    document.getElementById('root')
);