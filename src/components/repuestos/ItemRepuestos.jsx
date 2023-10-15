import React from "react"
import { View, Text, Image, TouchableHighlight, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

const ItemRepuestos = ({ product_title, product_price, product_photo }) => {
    return (
        <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image source={{ uri: product_photo }} style={styles.imagen} />
            <View>
                <Text style={styles.titulo}>{product_title}</Text>
                <View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Price:{product_price}</Text>
                    </View>
                    <TouchableHighlight>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.boton}>
                                Mas Detalles
                            </Text>
                            <Icon name='shopping-cart' color='#22C55E' size={25} style={{ marginLeft: 30 }} onPress={() => console.log('Carrito')} />
                        </View>
                    </TouchableHighlight>
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
        marginRight: 15
    },
    titulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
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
    }
})

export { ItemRepuestos }