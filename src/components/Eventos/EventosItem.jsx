import React from 'react';
import { Text, FlatList, StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"

const EventosData = [
    {
        imagen: 'https://images.unsplash.com/photo-1686997877408-2d60e7ef9227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        descripcion: '"¡Sumérgete en la Aventura 4x4 Extrema!Domina terrenos difíciles, conquista obstáculos enlodados y siente la adrenalina mientras los motores rujen y las ruedas se hunden en la diversión embarrada.”',
    },
    {
        imagen: 'https://images.unsplash.com/photo-1539858997092-d526a54ed2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: '"Descubre la Cima del Lujo sobre Ruedas. Nuestra colección de carros de lujo redefine la elegancia y el rendimiento”',
    },
    {
        imagen: 'https://images.unsplash.com/photo-1627642597814-eb117a851f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: '"¡Acelera hacia la Emoción Desenfrenada! Nuestro evento de carreras te lleva al borde de tu asiento en una competencia épica de velocidad y destreza.”',
    },
]

const ItemEventos = ({ imagen, descripcion }) => {
    return (
        <View style={{ position: 'relative', alignItems: 'center', paddingVertical: 20, width: 300 }}>
            <Image source={{ uri: imagen }} style={styles.imagen} />
            <Text>{descripcion}</Text>
            <LinearGradient
                colors={['white', 'transparent']}
                style={{
                    height: '70%',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    borderRadius: 15,
                }} />
        </View>
    )
}

const EventosItem = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={[styles.textItemEventos]}>
                DISFRUTA NUESTROS EVENTOS
            </Text>
            <FlatList
                data={EventosData}
                renderItem={({ item }) => (
                    <ItemEventos imagen={item.imagen} descripcion={item.descripcion} />
                )}
            />
            <Text style={styles.footer}>
                Contactanos en: wmotor@mail.com
                +1 874-192-31-98
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E40AF',
        color: 'white',
        fontWeight: 'bold'
    },
    imagen: {
        width: 200,
        height: 150,
        borderRadius: 15
    },
    textItemEventos: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 15,
    },
    footer: {
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 30
    }
})

export { EventosItem }