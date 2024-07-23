import { createContext, useContext } from 'react'
import { obtenerProductos } from '../helpers/productos'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { eliminarProductoPorId } from '../helpers/productos'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [productos, setProductos] = useState(obtenerProductos())

    const navigation = useNavigate()

    const handleEliminar = (id) => {
        setProductos(eliminarProductoPorId(id))
        navigation('/')
    }
    return (
        <GlobalContext.Provider value={
            {
                productos: productos,
                handleEliminar: handleEliminar
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    //devolvera el objeto value proveido por el GlobalContext
    return useContext(GlobalContext)
}