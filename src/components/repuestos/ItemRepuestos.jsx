import React, { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import { guardarProductoCarrito, verificarProductoCarrito } from "../../storage/carrito"
import useAuth from "../../hooks/useAuth"

const ItemRepuestos = ({ producto }) => {
    const [productoCarrito, setProductoCarrito] = useState(null)
    const [reload, setReload] = useState(false)
    const { auth } = useAuth()
    const { asin, product_title, product_price, product_photo } = producto

    useEffect(() => {
        (async () => {
            try {
                const response = await verificarProductoCarrito(auth.nombreUsuario, producto)
                setProductoCarrito(response)
            } catch (error) {
                setProductoCarrito(false)
            }
        })()
    }, [producto, reload])

    const reloadCheck = () => {
        setReload(prev => !prev)
    }

    const guardarProducto = async () => {
        try {
            await guardarProductoCarrito(auth.nombreUsuario, producto)
            reloadCheck()
            console.log(asin);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image source={{ uri: product_photo }} style={styles.imagen} />
            <View>
                <Text style={styles.titulo}>{product_title}</Text>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.precio}>Price:{product_price}</Text>
                        <Icon name='shopping-cart' color={productoCarrito ? '#22C55E' : '#000'} size={25} style={{ marginLeft: 30 }} onPress={guardarProducto} />
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    imagen: {
        width: 200,
        height: 150,
        borderRadius: 15,
        marginRight: 15,
        objectFit: 'contain'
    },
    titulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        width: 180
    },
    boton: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#22C55E',
        width: 100,
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 15
    },
    precio: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export { ItemRepuestos }