import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth'
import { obtenerUsuario, eliminarAlmacenamiento } from '../storage/usuarios'

const LogIn = () => {
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null)
    const { login } = useAuth()
    const navegacion = useNavigation()

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await obtenerUsuario()
                setUsers(response)
            })()
        }, [])
    )

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationScheme()),
        validateOnChange: false,
        onSubmit: (form) => {
            setError("")
            const { usuario, contraseña } = form
            users.find((user) => {
                if (user.nombreUsuario === usuario && user.contraseña === contraseña) {
                    console.log(user);
                    login(user)
                } else {
                    setError("Usuario o contraseña incorrectos")
                }
            })
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.loginForm}>
                <View style={styles.titul_LogoCon}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/49/49207.png' }} style={styles.logo} />
                    <Text style={styles.loginFormTitulo}>Login</Text>
                </View>
                <TextInput
                    placeholder='Usuario'
                    placeholderTextColor={'white'}
                    autoCapitalize='none'
                    value={formik.values.usuario}
                    onChangeText={(text) => formik.setFieldValue('usuario', text)}
                    style={styles.loginFormInput}
                />

                <TextInput
                    placeholder='Contraseña'
                    placeholderTextColor={'white'}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    value={formik.values.contraseña}
                    onChangeText={(text) => formik.setFieldValue('contraseña', text)}
                    style={styles.loginFormInput}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.contenedorBotones}>
                    <TouchableHighlight onPress={formik.handleSubmit}>
                        <Text style={{ ...styles.botones, backgroundColor: '#22C55E' }}>Iniciar Sesion</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navegacion.navigate('SignIn')}>
                        <Text style={{ ...styles.botones, backgroundColor: 'white', color: '#22C55E' }}>Registrarse</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style={styles.ContbotonGoogle}>
                    <View style={styles.botonGoogle}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/720/720255.png' }} style={styles.botonGoogleImagen} />
                        <Text>
                            Ingresar con Google
                        </Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.erroresCon}>
                    <Text style={styles.error}>{formik.errors.usuario}</Text>
                    <Text style={styles.error}>{formik.errors.contraseña}</Text>
                    <Text style={styles.error}>{error}</Text>
                </View>
            </View>
        </View>
    )
}

function initialValues() {
    return {
        usuario: "",
        contraseña: "",
    };
}

function validationScheme() {
    return {
        usuario: Yup.string().required("El usuario es obligatorio"),
        contraseña: Yup.string().required("La contraseña es obligatoria"),
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E40AF',
        height: '100%'
    },
    loginForm: {
        alignItems: 'center',
        marginBottom: 10,
        padding: 30
    },
    titul_LogoCon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    loginFormTitulo: {
        fontSize: 40,
        paddingBottom: 30,
        color: 'yellow',
        fontWeight: '700'
    },
    loginFormInput: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        height: 40,
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    botones: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    ContbotonGoogle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15,
        width: '80%',
    },
    botonGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    botonGoogleImagen: {
        width: 30,
        height: 30,
        paddingRight: 10
    },
    erroresCon: {
        alignItems: 'center',
        marginTop: 10
    },
    error: {
        color: 'black',
        fontSize: 20
    }
})

export default LogIn