import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user , loading , error] = useAuthState(auth);
    const menu =<>
      
        <li><Link to={'/tools'}>Tools</Link></li>
        <li><Link to={'/tools'}>about</Link></li>
        <li><Link to={'/tools'}>contact</Link></li>
        <li><Link to={'/tools'}>blog</Link></li>
        <li><Link to={'/tools'}>services</Link></li>
        {
            user &&    <li><Link to={'/dashboard'}>dashboard</Link></li>
        }
      
    </>
    const UserSignOut = ()=>{
        signOut(auth)
    }
    return (
        <div>
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {menu}
      </ul>
    </div>
   <Link to={'/'}> <a class="btn btn-ghost normal-case text-xl">site-Name</a></Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menu}
    </ul>
  </div>
  <div class="navbar-end">
    {
    user ?<button onClick={ UserSignOut } className='btn btn-info '>Logout</button> : 
    <Link to={'/login'}><a  class="btn">login</a></Link>
}
  </div>
</div>
</div>
        
    );
};

export default Header;