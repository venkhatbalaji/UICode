import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import DATA from './BlogList';

export default props => {
    console.log(props)
    return <div>
        <ul>
            <h1>{props.author.firstName}</h1>
            <h1><img src={props.author.image}/></h1>
        </ul>
    </div>
}

