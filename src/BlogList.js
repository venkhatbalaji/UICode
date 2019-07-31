import React from 'react';
import Data from './data.json';
import Blog from './blog';




export default props => {
  console.log(Data)
  return <div>{ Data.map(x =>  (<Blog {...x} />)) }</div>
}
  