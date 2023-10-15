import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Eventos from '../screens/Eventos'
import Cuenta from '../components/LogIn/Cuenta'

const Stack = createNativeStackNavigator()

const EventosNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Eventos' component={Eventos} options={{
                headerShown: false
            }} />
            <Stack.Screen name='CuentaUser' component={Cuenta} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default EventosNav