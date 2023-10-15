import React from 'react';
import { Text, TouchableHighlight, StyleSheet, Image, View } from 'react-native';

const ItemCar = ({ imagen, descripcion, motor, precio }) => {
    return (
        <TouchableHighlight style={styles.contenedor} onPress={() => console.log(descripcion)}>
            <View style={styles.elementos}>
                <Image source={{ uri: imagen }}
                    style={styles.imagen} />
                <Text style={styles.texto}>{descripcion}</Text>
                <Text style={styles.texto}>{motor}</Text>
                <Text style={styles.precio}>{precio}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#1E40AF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },
    elementos: {
        flex: 1,
        backgroundColor: '#5F71AC',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
        borderRadius: 15,
    },
    texto: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    precio: {
        color: 'lime',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagen: {
        width: 200,
        height: 150,
        borderRadius: 15
    }
})

export { ItemCar }