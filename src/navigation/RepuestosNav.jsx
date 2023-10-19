import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cuenta from '../components/LogIn/Cuenta'
import Respuestos from '../screens/Repuestos'
import Carrito from '../components/carrito/Carrito'

const Stack = createNativeStackNavigator()

const RepuestosNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Repuestos' component={Respuestos} options={{
                headerShown: false
            }} />
            <Stack.Screen name='CuentaUser' component={Cuenta} options={{
                headerShown: false
            }} />
            <Stack.Screen name='Carrito' component={Carrito} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default RepuestosNav