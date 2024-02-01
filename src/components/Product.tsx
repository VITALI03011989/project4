import React, { useState } from 'react'
import s from './Product.module.css'
import { IProduct } from './models'

interface ProductPros{
    product:IProduct
}
const Product = (props:ProductPros) => {
    const[details,setDetails]=useState(false)
  return (
    <div className={s.prod}>
        <img width={100} height={80} src={props.product.image} alt='./src/img/1.jpg'/>
        <p className={s.p}>{props.product.title}</p> 
        <p className={s.p}>Стоимость:{props.product.price}$</p> 
        <button className={s.b} onClick={()=> setDetails(prev =>!prev)}>Show details</button>
       {details &&<div>
            <p>{props.product.title}</p>
        </div>} 
    </div>

  )
}
export default Product