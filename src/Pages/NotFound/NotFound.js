import React from 'react';
import { useParams } from 'react-router-dom';

const NotFound = () => {
  let  {id}  = useParams();

  return (
    <div><h1>{id} Not Found</h1></div>
  )
}

export default NotFound