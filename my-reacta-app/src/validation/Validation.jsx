import React ,{useEffect, useState}from 'react'
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
import './Validation.css'


const Validation = () => {
    const [suppliers, setSuppliers] = useState([]);

    const getSuppliers = async() =>{
       const response = await axios.get("http://northwind.vercel.app/api/suppliers")
       console.log(response.data);
       setSuppliers(response.data)
    }

useEffect(() =>{
   getSuppliers()
},[]) 

 


  return (
    <div className='validation'>
      
          <form action="">
          <div className='inputBox'>
              <input type="text" placeholder="name" />
              <input type="text" placeholder="quantityPerUnit" />
              <input type="text" placeholder="unitPrice" />
              <input type="text" placeholder="unitsOnOrder" /> 
         </div>
          <div className='selectBox'>
            <select name="" id="">
             {suppliers?.map((item)=>(
                <option key={item.id}>{item?.contactTitle}</option>
             ))}
            </select>
          <button type='submit' className='submitButton'>Submit</button>
         </div>
          </form>
       </div>
    
  )
}

export default Validation