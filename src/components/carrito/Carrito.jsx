import React from 'react'
import { View, StyleSheet, FlatList, Text, Button } from 'react-native'
import { obtenerProductosCarrito, eliminarProductoCarrito } from '../../storage/carrito'
import useAuth from '../../hooks/useAuth'
import ProductoCar from './ProductoCar'

const Carrito = () => {
    const { auth } = useAuth()
    const nombreUsuario = auth.nombreUsuario

    const obtenerProductos = async () => {
        try {
            const response = await obtenerProductosCarrito(nombreUsuario)
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }

    const eliminarProductos = async () => {
        try {
            await eliminarProductoCarrito(nombreUsuario)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={styles.contenedor}>
            <Text>Hola mundo</Text>
            <Button title='Obtener productos' onPress={obtenerProductos} />
            <Button title='Eliminar productos' onPress={eliminarProductos} />
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