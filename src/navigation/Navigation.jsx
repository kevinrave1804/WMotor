import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Eventos from '../screens/Eventos'
import Compraventa from '../screens/Compraventa'
import Repuestos from '../screens/Repuestos'

const Tab = createBottomTabNavigator()

const IconsHeaderRight = () => {
    return (
        <View style={styles.IconHeaderRight}>
            <Icon name='shopping-cart' color='#000' size={25} style={{ marginRight: 30 }} onPress={() => console.log('Carrito')} />
            <Icon name='user' color='#000' size={25} onPress={() => console.log('Perfil')} />
        </View>
    )
}

const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Eventos" component={Eventos} options={{
                headerStyle: { backgroundColor: '#1E40AF' },
                headerTitle: () => <Text style={styles.headerTitulo}>Eventos</Text>,
                headerRight: () => <IconsHeaderRight />,
                tabBarIcon: () => <Icon name='car' color='#000' size={25} />
            }} />
            <Tab.Screen name="Compraventa" component={Compraventa} options={{
                headerStyle: { backgroundColor: '#1E40AF' },
                headerTitle: () => <Text style={styles.headerTitulo}>Compraventa</Text>,
                headerRight: () => <IconsHeaderRight />,
                tabBarIcon: () => <Icon name='warehouse' color='#000' size={25} />
            }} />
            <Tab.Screen name="Repuestos" component={Repuestos} options={{
                headerStyle: { backgroundColor: '#1E40AF' },
                headerTitle: () => <Text style={styles.headerTitulo}>Repuestos</Text>,
                headerRight: () => <IconsHeaderRight />,
                tabBarIcon: () => <Icon name='tools' color='#000' size={25} />
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    headerTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'yellow'
    },
    IconHeaderRight: {
        flexDirection: 'row',
        marginRight: 20,
    }
})

export { Navigation }