import React from 'react';
import ReactDOM from 'react-dom';

function RenderedWith(props) {
    return <span>Rendered with {props.with}!</span>;
}

ReactDOM.render(
    <RenderedWith with="React" />,
    document.getElementById('root')
);