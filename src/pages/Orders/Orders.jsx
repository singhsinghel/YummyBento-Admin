import React,{useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import './orders.css'
import axios from 'axios'
import { assets, url } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../Context/Context'
const Orders = () => {
  const [orders, setOrders]=useState([]);
  const {token}=useContext(StoreContext)
  
  //fetching all orders
  const fetchOrders=async()=>{
    if(!token){
      toast.error("Unauthorized! Please login");
      return;
    }
      let response=await axios.get(url+'/api/order/fetchorders',{headers:{token}});
      if(response.data.success){
         setOrders(response.data.data);
      }
      else
      toast.error(response.data.message)
  }
 //updating status
 const updateStatus=async(orderId,status)=>{
   let response = await axios.post(url+'/api/order/changestatus',{orderId,status},{headers:{token}});
   if(response.data.success){
     fetchOrders()
     toast.success('Status Updated')
   }
   else
   toast.error(response.data.message)
 }
  useEffect(()=>{
    fetchOrders();
  },[token])
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list ">
        {
          orders.map((order,index)=>(
             <div key={index} className="order-item">
                <img src={assets.parcel_icon} alt="" />
                <div>
                  <p className='order-item-food'>
                    {order.items.map((item,index)=>(
                       index === order.items.length - 1 
                       ? `${item.name} x ${item.quantity}`
                       : `${item.name} x ${item.quantity}, `
                    ))}
                  </p>
                  <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}
                  <div className='order-item-address'>
                    <p>{order.address.street+", "}
                    <br />{order.address.city+", "+order.address.state+", "+order.address.country+", "+ order.address.zip}</p>
                  </div>
                  <p className='order-item-phone'>{order.address.phone}</p>
                  </p>
                </div>
                <p>Items: {order.items.length}</p>
                <p>Amount: ₹{order.amount}</p>
                <select  onChange={(e)=>{updateStatus(order._id,e.target.value)} } value={order.status}>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
             </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
