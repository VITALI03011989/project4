import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../components/models"

export function useProducts() {
    const [products,setProducts]=useState<IProduct[]>([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
  
    function addProduct(product:IProduct) {
      setProducts(prev =>[...prev,product])
    }

     async function fetchProducts() {
      try {
        setError('')
         setLoading(true)
        const response = await axios.get<IProduct[]>('https://65b5eb1ada3a3c16ab0007e2.mockapi.io/products')
        setProducts(response.data)
        setLoading(false)
  
      } catch (e:unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
    useEffect(()=> {fetchProducts()},[])
    return {products,error,loading,addProduct}}
