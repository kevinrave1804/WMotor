import React from 'react'
import { Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CompraventaNav from '../navigation/CompraventaNav'
import EventosNav from './EventosNav'
import RepuestosNav from './RepuestosNav'
import CuentaNav from './CuentaNav'
import useAuth from '../hooks/useAuth'

const Tab = createBottomTabNavigator()

const IconsHeaderRight = () => {
    const navegacion = useNavigation()
    const { auth } = useAuth()
    return (
        <View style={styles.IconHeaderRight}>
            <Icon name='shopping-cart' color='#000' size={25} style={{ marginRight: 30 }} onPress={() => console.log('Carrito')} />
            <TouchableHighlight onPress={() => navegacion.navigate('CuentaUser')}>
                <Image source={{ uri: `https://ui-avatars.com/api/?name=${auth.nombre}+${auth.apellidos}` }} style={{ width: 30, height: 30, borderRadius: 100 }} />
            </TouchableHighlight>
        </View>
    )
}

const Navigation = () => {
    const { auth } = useAuth()
    return (
        <>
            {auth ? (
                <Tab.Navigator>
                    <Tab.Screen name="EventosNav" component={EventosNav} options={{
                        title: 'Eventos',
                        headerStyle: { backgroundColor: '#1E40AF' },
                        headerTitle: () => <Text style={styles.headerTitulo}>Eventos</Text>,
                        headerRight: () => <IconsHeaderRight />,
                        tabBarIcon: () => <Icon name='car' color='#000' size={25} />
                    }} />
                    <Tab.Screen name="CompraventaNav" component={CompraventaNav} options={{
                        title: 'Compra-Venta',
                        headerStyle: { backgroundColor: '#1E40AF' },
                        headerTitle: () => <Text style={styles.headerTitulo}>Compraventa</Text>,
                        headerRight: () => <IconsHeaderRight />,
                        tabBarIcon: () => <Icon name='warehouse' color='#000' size={25} />
                    }} />
                    <Tab.Screen name="RepuestosNav" component={RepuestosNav} options={{
                        title: 'Repuestos',
                        headerStyle: { backgroundColor: '#1E40AF' },
                        headerTitle: () => <Text style={styles.headerTitulo}>Repuestos</Text>,
                        headerRight: () => <IconsHeaderRight />,
                        tabBarIcon: () => <Icon name='tools' color='#000' size={25} />
                    }} />
                </Tab.Navigator>
            ) : (
                <Tab.Navigator>
                    <Tab.Screen name="Cuenta" component={CuentaNav} options={{
                        tabBarShowLabel: false,
                        tabBarIcon: () => <Icon name='user' color='#000' size={25} />,
                        headerStyle: { backgroundColor: '#1E40AF' },
                        headerTitle: () => <Text style={styles.headerTitulo}>WMotor</Text>,
                        headerLeft: () => <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/49/49207.png' }} style={styles.logo} />
                    }} />
                </Tab.Navigator>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    headerTitulo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'yellow',
    },
    IconHeaderRight: {
        flexDirection: 'row',
        marginRight: 20,
    },
    tituloApp: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black',
    },
    logo: {
        width: 50,
        height: 50,
        marginLeft: 20
    }
})

export { Navigation }