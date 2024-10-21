import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './list.css';
import { toast } from 'react-toastify';
import {StoreContext} from '../../Context/Context.jsx'
const List = ({url}) => {

  const[list,setList]=useState([]);
  const {token}=useContext(StoreContext)

  //fetching list
  const fetchList=async()=>{
    const response= await axios.get(`${url}/api/food/list`,{},{headers:{token}});
    
    if(response.data.success){
       setList(response.data.data)
    }
    else{
      toast.error(response.data.error);
    }
  };
  //deleting items
  const deleteItem=async(id,index)=>{

    const response= await axios.post(`${url}/api/food/${id}/delete`);
    if(response.data.success){      
      setList((list) => list.filter((_, i) => i !== index));
      toast.success(response.data.message)
   }
   else{
     toast.error(response.data.error);
   }
  }
  useEffect(()=>{
      fetchList();
  },[])
  return (
    <div className='list add w-100'>
      <p>All foods Lists</p>
      <div className="list-table text-center p-4 ">
        <div className="list-table-format row ">
          <b className='col-2'>image</b>
          <b className='col-2'>Name</b>
          <b className='col-4'>Category</b>
          <b className='col-2'>Price</b>
          <b className='col-2'>Action</b>
        </div>
        {list.map((item,index)=>{
         return(
          <div key={index} className="list-table-format row  d-flex  align-items-center ">
            <img className='col-2' src={`${url}/images/`+item.image} alt=""  />
            <p className='col-2'>{item.name}</p>
            <p className='col-4'>{item.category}</p>
            <p className='col-2'>{item.price}</p>
            <p onClick={()=>deleteItem(item._id,index)} className='text-danger fw-bolder cursor-pointer col-2'>X</p>
          </div>
         ) 
        })}
      </div>
    </div>
  )
}

export default List
