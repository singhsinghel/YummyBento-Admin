import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './index.css'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from '../src/pages/List/List'
import Orders from './pages/Orders/Orders'
import Alerts from './components/alerts/Alerts'


function App() {
  return (
    <div className='app d-flex flex-column justify-content-center  m-auto'>
    <Navbar />
    <hr className='m-0' />
    <Alerts />
    <div className="app-content d-flex">
      <Sidebar />
      <Routes>
        <Route path='/add' element={<Add />} />
        <Route path='/list' element={<List />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
    </div>
  )
};
export default App;