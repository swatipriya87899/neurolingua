import React from 'react';
import { useParams } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  let  {id}  = useParams();

    //  Capitalize first letter
    const capitalizeFirst = str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

  return (
    <div className='not_found'>
      <div><h1>{capitalizeFirst(id)} Not Found</h1></div>
     <div><h4>OOps ! Something Went Wrong</h4></div> 
      </div>
  )
}

export default NotFound