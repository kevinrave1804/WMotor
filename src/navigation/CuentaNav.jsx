import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from '../screens/LogIn'
import SignIn from '../components/LogIn/SignIn'

const Stack = createNativeStackNavigator()

const CuentaNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LogIn' component={LogIn} options={{
                headerShown: false
            }} />
            <Stack.Screen name='SignIn' component={SignIn} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default CuentaNav