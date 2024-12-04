import React from 'react'
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default HomeLayout