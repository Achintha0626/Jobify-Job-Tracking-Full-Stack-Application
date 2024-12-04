import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

  const error=useRouteError()

  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/'>back home</Link>
    </div>
  );
}

export default Error