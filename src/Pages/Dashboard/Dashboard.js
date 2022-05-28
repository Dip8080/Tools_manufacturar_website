import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin'

const Dashboard = () => {
    // const [user] = useAuthState();
    // const [admin] =  useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <h1 className='text-2xl'>Dashboard</h1>
         <Outlet></Outlet>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          
          <Link to={'/dashboard'}>  <li><a>dashboard</a></li></Link>
          <Link to={'/dashboard/reviews'}>  <li><a>review</a></li></Link>
          <Link to={'/dashboard/history'}>  <li><a>history</a></li></Link>
           <Link to={'/dashboard/user'}>  <li><a>Users</a></li></Link>
          
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;