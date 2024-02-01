import{createContext, useState} from 'react'

interface IWindowContext {
    window:boolean
    open:()=>void
    close:()=>void
}

export const WindowContext = createContext<IWindowContext>( {
    window:false,
    open:() => {},
    close: () => {}
})

export const WindowState = ({children}:{children:React.ReactNode}) =>{
const [window,setWindow]=useState(false)
const open = () => setWindow(true)
const close = () => setWindow(false)

    return (
        <WindowContext.Provider value={{window,open,close}}>
            {children}
        </WindowContext.Provider>

    )
}