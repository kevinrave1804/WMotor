import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, Button } from 'react-native'
import { obtenerProductosCarrito, eliminarProductos } from '../../storage/carrito'
import useAuth from '../../hooks/useAuth'
import { ItemRepuestos } from '../repuestos/ItemRepuestos'

const Carrito = () => {
    const [productosCarrito, setProductosCarrito] = useState([])
    const { auth } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await obtenerProductosCarrito(auth.nombreUsuario)
                setProductosCarrito(response)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [auth])

    return (
        <View style={styles.contenedor}>
            <FlatList
                data={productosCarrito}
                numColumns={2}
                renderItem={({ item }) => <ItemRepuestos producto={item} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1E40AF',
        height: '100%'
    }
})

export default Carrito