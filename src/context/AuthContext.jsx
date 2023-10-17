import React, { createContext, useState, useEffect } from 'react'
import { API_KEY_AMAZON_REPUESTOS } from '../util/constantes'

export const AuthContext = createContext({
    auth: undefined,
    login: () => { },
    logout: () => { },
    repuestos: undefined,
})

export function AuthProvider(props) {
    const { children } = props
    const [repuestos, setRepuestos] = useState(null)
    const [auth, setAuth] = useState(undefined)

    //Peticion a la API de Amazon
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Repuestos%20carros%20y%20motos&page=1&country=US&category_id=aps';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY_AMAZON_REPUESTOS,
            'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    // useEffect(() => {
    //     try {
    //         fetch(url, options)
    //             .then(response => response.json())
    //             .then(data => setRepuestos(data))
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [])

    const login = (dataUser) => {
        setAuth(dataUser)
    }

    const logout = () => {
        setAuth(undefined)
    }
    return (
        <AuthContext.Provider value={{ auth, login, logout, repuestos }}>
            {children}
        </AuthContext.Provider>
    )
}