import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import useAuth from '../../hooks/useAuth'

const Cuenta = () => {
    const { auth, logout } = useAuth()
    return (
        <View style={styles.contenedor}>
            <Image source={{ uri: `https://ui-avatars.com/api/?name=${auth.nombre}+${auth.apellidos}` }} style={styles.imagen} />
            <Text style={styles.titulo}>Bienvenido</Text>
            <Text style={styles.nombre}>{auth.nombre} {auth.apellidos}</Text>
            <Button title='Cerrar sesion' onPress={() => { logout() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1E40AF',
        height: '100%'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    nombre: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 50,
    }
})

export default Cuenta