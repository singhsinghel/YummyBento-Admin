import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './index.css'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from '../src/pages/List/List'
import Orders from './pages/Orders/Orders'
import Alerts from './components/alerts/Alerts'
import TemporaryDrawer from './components/Drawer/TemporaryDrawer'
import SignIn from './pages/SignIn/SignIn'
import ProtectedRoute from './pages/SignIn/ProtectedRoute'
import { useContext, useEffect } from 'react'
import { StoreContext } from './Context/Context'
function App() {
   const navigate=useNavigate()
   const savedToken = localStorage.getItem('token');
   const {token,setToken}=useContext(StoreContext);
   
   const location = useLocation();
   const isSignInPage = location.pathname === '/';  
   const url='https://yummy-bento-backend.onrender.com'
   useEffect(() => {

      //redirecting to login page if token is not available
      if (!savedToken) {
        navigate('/'); 
      } else {
        setToken(savedToken); 
      }
    }, [setToken, navigate]);

  return (
    <div className={`app d-flex flex-column m-auto ${isSignInPage ? '' : 'justify-content-center '}`}>
    {/* checking if token is availabe or not on signinpage */}
    {(!isSignInPage ||token) && <Navbar />}
    {(!isSignInPage ||token) && <hr className='m-0' />}
    {<Alerts />}
    {(!isSignInPage ||token) && <TemporaryDrawer />}
    <div className="app-content d-flex">
       {(!isSignInPage ||token) && <Sidebar />}
       <Routes>
          {!token&& <Route path='/' element={<SignIn />} />}
          <Route path='/add' element={<ProtectedRoute><Add url={url} /></ProtectedRoute> } />
          <Route path='/list' element={<ProtectedRoute><List url={url} /></ProtectedRoute> } />
          <Route path='/orders' element={<ProtectedRoute><Orders url={url} /></ProtectedRoute> } />
       </Routes>
    </div>
 </div>
  )
};
export default App;