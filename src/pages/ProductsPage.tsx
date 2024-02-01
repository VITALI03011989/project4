import React, { useContext, useEffect, useState } from 'react';
import { IProduct } from '../components/models';
import { useProducts } from '../hooks/products';
import { WindowContext } from '../context/WindowContext';
import Product from '../components/Product';
import CreateProduct from '../components/CreateProduct';
import s from '../Ap.module.css'
import Window from '../components/Window';

function ProductsPage() {
  const {loading,error,products,addProduct}=useProducts()
  const {window,open,close} = useContext(WindowContext)

const createHandler = (product:IProduct) => {
  close()
  addProduct(product)
}
 
  return (
       <div className={s.app}>
        {loading &&<p className={s.error}>Loading.........</p>}
        {error &&<p className={s.error}>{error}</p>}
        {products.map((product) => (<Product key={product.title} product={product}/>))}

       {window && <Window title='Create new product' onClose={close}>
        <CreateProduct onCreate={createHandler}/>
        </Window>}
        <div>
        <button className={s.button} onClick={open}>+</button>
        </div>
        </div>
  )}
export default ProductsPage;