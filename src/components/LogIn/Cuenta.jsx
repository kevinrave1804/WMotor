import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import useAuth from '../../hooks/useAuth'
const Cuenta = () => {
    const { auth, logout } = useAuth()
    return (
        <View style={styles.contenedor}>
            <Image source={{ uri: `https://ui-avatars.com/api/?name=${auth.nombre}+${auth.apellidos}` }} style={styles.imagen} />
            <Text style={styles.titulo}>Bienvenido</Text>
            <Text style={styles.nombre}>{auth.nombre} {auth.apellidos}</Text>
            <View style={styles.Ajustes}>
                <View style={styles.ItemAjustes}>
                    <Icon name='gear' color='#000' size={40} />
                    <Text style={styles.ItemAjustesTexto}>Ajustes</Text>
                    <Icon name='chevron-right' color='gray' size={40} />
                </View>
                <View style={styles.ItemAjustes}>
                    <Icon name='bell' color='#000' size={40} />
                    <Text style={styles.ItemAjustesTexto}>Notificaciones</Text>
                    <Icon name='chevron-right' color='gray' size={40} />
                </View>
                <View style={styles.ItemAjustes}>
                    <Icon name='laptop' color='#000' size={40} />
                    <Text style={styles.ItemAjustesTexto}>Dispositivos</Text>
                    <Icon name='chevron-right' color='gray' size={40} />
                </View>
                <View style={styles.ItemAjustes}>
                    <Icon name='language' color='#000' size={40} />
                    <Text style={styles.ItemAjustesTexto}>Idioma</Text>
                    <Icon name='chevron-right' color='gray' size={40} />
                </View>
            </View>
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
    },
    Ajustes: {
        marginVertical: 50,
        alignItems: 'center',
    },
    ItemAjustes: {
        flexDirection: 'row',
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    ItemAjustesTexto: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Cuenta