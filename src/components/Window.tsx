import React from 'react'
import s from './Product.module.css'
import CreateProduct from './CreateProduct'

interface WinwowProps {
  children:React.ReactNode
  title:string
  onClose:() => void
}

const Window = ({children,title,onClose}:WinwowProps) => {
  return (
    <>
    <div className={s.w} onClick={onClose}/>
    <div className={s.wow}>
    <p>{title}</p>
        {children}
    </div>
    </>
  )
}
export default Window