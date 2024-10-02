import React, {  useContext, useState } from 'react';
import './add.css';
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {
  const url = 'http://localhost:8080';
  const categories = [
    'Salad', 'Rolls', 'Deserts', 'Sandwich', 'Cake', 'Pure Veg', 'Pasta', 'Noodles'
  ];
  const [image,setImage]=useState(false)
  const [data,setData]=useState({
    image:'',
    name:'',
    description:'',
    category:'salad',
    price:'',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }; 

  const onSubmitHandle= async(event)=>{
    event.preventDefault();
    const formData= new FormData();
    formData.append('name',data.name);
    formData.append('image',image);
    formData.append('price',Number(data.price));
    formData.append('category',data.category);
    formData.append('description',data.description);

    const response=await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      toast.success(response.data.message)
      //reset the values
      setData({
        image:'',
        name:'',
        description:'',
        category:'salad',
        price:'',
      });
      setImage(false);

    }
    else{
        toast.error(response.data.message)
    } 
  }

  return (
    <div className="add p-4 offset-2">
      <form onSubmit={onSubmitHandle}>
        <fieldset className="add-img-upload ">
          <legend>Upload Image</legend>
          <label htmlFor="image">
            <div className="label-add-img d-flex justify-content-center align-items-center">
            {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  style={{ width: '4rem', height: '4rem', objectFit: 'cover' }}
                /> 
              ) : (
                <div className="label-img d-flex justify-content-center align-items-center cursor-pointer">
                  <i className="bx bx-upload fs-1"></i>
                </div>
              )}
            </div>
          </label>
          <input  
            onChange={(e)=>{setImage(e.target.files[0])}}
            type="file"
            id="image"
            className="d-none" 
            required 
          />
        </fieldset>

        <fieldset className="add-product-name">
          <input
          onChange={handleChange}
          value={data.name}
            name="name"
            placeholder="Product Name"
            type="text"
            className="form-control mt-3"
            required
            aria-label="Product Name"
          />
        </fieldset>

        <fieldset className="add-product-description">
          <textarea
          onChange={handleChange}
          value={data.description}
          required
            className="form-control mt-3"
            placeholder="Description"
            name="description"
            id=""
            cols="30"
            rows="3"
            aria-label="Product Description"
          ></textarea>
        </fieldset>

        <div className="add-product-category-price row mt-0 mt-md-3">
          <fieldset className="add-product-category col-md-6 mt-3 mt-md-0 ">
            <select 
               onChange={handleChange}
               className="form-control cursor-pointer" 
               required 
               name='category'
               value={data.category}
               aria-label="Product Category">
               {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
               ))}
            </select>
          </fieldset>
          <fieldset className="add-product-price col-md-6">
            <input
              onChange={handleChange}
              value={data.price}
              name='price'
              className="form-control mt-3 mt-md-0"
              type="number"
              placeholder="Price"
              required
              aria-label="Product Price"
            />
          </fieldset>
        </div>
        <button type='submit' className="btn btn-dark mt-3 px-4 rounded-1">Add</button>
      </form>
    </div>
  );
};

export default Add;
