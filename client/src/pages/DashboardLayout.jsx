import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'

const DashboardLayout = () => {
  return (
   <Wrapper>
    <main className="dashboard">

      <SmallSidebar/>
      <BigSidebar/>
      <div>
        <Navbar/>
        <div className='dashboard-page'>

        </div>
      </div>

    </main>
    <Outlet/>
   </Wrapper>
  )
}

export default DashboardLayout