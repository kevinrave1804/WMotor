import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../hooks/useAuth'
import { datosUser, detallesUser } from '../util/datosUser'

const LogIn = () => {
    const [error, setError] = useState(null)
    const { login } = useAuth()
    const navegacion = useNavigation()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationScheme()),
        validateOnChange: false,
        onSubmit: (form) => {
            setError("")
            const { usuario, contraseña } = form
            if (usuario !== datosUser.nombreUsuario || contraseña !== datosUser.contraseña) {
                setError('Usuario o contraseña incorrectos')
            } else {
                login(detallesUser)
            }
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.loginForm}>
                <Text style={styles.loginFormTitulo}>Login</Text>
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
    loginFormTitulo: {
        fontSize: 40,
        paddingBottom: 30,
        color: '#22C55E',
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