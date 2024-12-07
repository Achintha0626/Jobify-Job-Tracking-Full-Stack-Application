import React from 'react'
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
     
      <Outlet></Outlet>
    </>
  );
}

export default HomeLayout