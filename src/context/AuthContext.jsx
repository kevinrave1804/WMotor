import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    auth: undefined,
    login: () => { },
    logout: () => { },
    repuestos: undefined
})

export function AuthProvider(props) {
    const { children } = props
    const [repuestos, setRepuestos] = useState(null)

    //Peticion a la API de Amazon
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Repuestos%20carros%20y%20motos&page=1&country=US&category_id=aps';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1e26af7148mshe6e83c523034fd7p1be747jsn1f5a2844fe91',
            'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    useEffect(() => {
        try {
            fetch(url, options)
                .then(response => response.json())
                .then(data => setRepuestos(data))
        } catch (error) {
            console.error(error);
        }
    }, [])



    return (
        <AuthContext.Provider value={{ repuestos }}>
            {children}
        </AuthContext.Provider>
    )
}