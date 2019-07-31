import React from 'react';
import { render } from 'react-dom';
import BlogList from './BlogList';
// import any CSS that you need like this
import "./index.css";
// the blog data
import data from "./data.json";

const App = () => (
  <div className="red">
    <BlogList/>
  </div>
);

render(<App />, document.getElementById('root'));
