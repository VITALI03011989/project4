import React, { useState } from 'react'
import s from './Product.module.css'
import { IProduct } from './models'
import axios from 'axios'

const productData:IProduct = {   
  "title": "Acer Extensa EX215-31-P035",
  "price": 823,
  "image": "./img/1.jpg"
}

interface CreateProductProps {
  onCreate:(product:IProduct) => void }

   function CreateProduct ({onCreate}:CreateProductProps) {
    const [value,setValue] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        productData.title = value

      const response = await axios.post<IProduct>('https://65b5eb1ada3a3c16ab0007e2.mockapi.io/products', productData)
    
   onCreate(response.data)}

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
         setValue(event.target.value)
        }
        
  return (
    <form onSubmit={submitHandler}>
        <input type='text' className={s.text}  placeholder='Enter product title...' value={value} onChange={changeHandler} />
        <button type="submit" className={s.b}>Create</button>   
    </form>
  )
}
export default CreateProduct