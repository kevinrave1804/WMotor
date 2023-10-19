import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import { guardarProductoCarrito } from "../../storage/carrito"
import useAuth from "../../hooks/useAuth"

const ItemRepuestos = ({ producto }) => {
    const { auth } = useAuth()
    const { id, product_title, product_price, product_photo } = producto

    const guardarProducto = async () => {
        try {
            await guardarProductoCarrito(auth.nombreUsuario, producto)
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
                        <Icon name='shopping-cart' color='#22C55E' size={25} style={{ marginLeft: 30 }} onPress={guardarProducto} />
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