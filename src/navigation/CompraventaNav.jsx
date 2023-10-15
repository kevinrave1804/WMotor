import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cuenta from '../components/LogIn/Cuenta'
import Compraventa from '../screens/Compraventa'

const Stack = createNativeStackNavigator()

const CompraventaNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Compraventa' component={Compraventa} options={{
                headerShown: false
            }} />
            <Stack.Screen name='CuentaUser' component={Cuenta} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default CompraventaNav