
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Alltools from './Pages/Alltools/Alltools';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import History from './Pages/Dashboard/History';
import MyOrder from './Pages/Dashboard/MyOrder';
import Reviews from './Pages/Dashboard/Reviews';
import User from './Pages/Dashboard/User';
import Error from './Pages/Error/Error';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import ToolInfo from './Pages/Home/ToolInfo/ToolInfo';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/toolinfo/:toolid' element={
        <RequireAuth>
          <ToolInfo></ToolInfo>
        </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
        <RequireAuth>
         <Dashboard></Dashboard>
        </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='/dashboard/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard/user' element={<User></User>}></Route>
          <Route path='/dashboard/history' element={<History></History>}></Route>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/Alltools' element={<Alltools></Alltools>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
       
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
