import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './index.css'
import {Route, Routes, useLocation} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from '../src/pages/List/List'
import Orders from './pages/Orders/Orders'
import Alerts from './components/alerts/Alerts'
import TemporaryDrawer from './components/Drawer/TemporaryDrawer'
import SignIn from './pages/SignIn/SignIn'
import { useContext } from 'react'
import { StoreContext } from './Context/Context'
import ProtectedRoute from './pages/SignIn/ProtectedRoute'
function App() {
   const {token}=useContext(StoreContext)
  const isSignInPage=!token
  const url='https://yummy-bento-backend.onrender.com'
  return (
    <div className={`app d-flex flex-column ${isSignInPage ? '' : 'justify-content-center m-auto'}`}>
    {!isSignInPage && <Navbar />}
    {!isSignInPage && <hr className='m-0' />}
    {<Alerts />}
    {!isSignInPage && <TemporaryDrawer />}
    <div className="app-content d-flex">
       {!isSignInPage && <Sidebar />}
       <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/add' element={<ProtectedRoute><Add url={url} /></ProtectedRoute> } />
          <Route path='/list' element={<ProtectedRoute><List url={url} /></ProtectedRoute> } />
          <Route path='/orders' element={<ProtectedRoute><Orders url={url} /></ProtectedRoute> } />
       </Routes>
    </div>
 </div>
  )
};
export default App;