import React from 'react'
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SignIn = () => {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationScheme()),
        validateOnChange: false,
        onSubmit: (form) => {
            const { nombre, apellido, nombreUsuario, correo, contraseña } = form
            console.log('Excelente');
        }
    })

    return (
        <View style={styles.RegistroCon}>
            <Text style={styles.titulo}>Registro</Text>
            <View>
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor={'white'}
                    autoCapitalize='none'
                    value={formik.values.nombre}
                    onChangeText={(text) => formik.setFieldValue('nombre', text)}
                    style={styles.input} />
                <TextInput
                    placeholder="Apellido"
                    placeholderTextColor={'white'}
                    autoCapitalize='none'
                    value={formik.values.apellido}
                    onChangeText={(text) => formik.setFieldValue('apellido', text)}
                    style={styles.input} />
                <TextInput
                    placeholder="Nombre de usuario"
                    placeholderTextColor={'white'}
                    autoCapitalize='none'
                    value={formik.values.nombreUsuario}
                    onChangeText={(text) => formik.setFieldValue('nombreUsuario', text)}
                    style={styles.input} />
                <TextInput
                    placeholder="Correo electronico"
                    placeholderTextColor={'white'}
                    autoCapitalize='none'
                    value={formik.values.correo}
                    onChangeText={(text) => formik.setFieldValue('correo', text)}
                    style={styles.input} />
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor={'white'}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    value={formik.values.contraseña}
                    onChangeText={(text) => formik.setFieldValue('contraseña', text)}
                    style={styles.input} />
            </View>
            <TouchableHighlight onPress={formik.handleSubmit}>
                <Text style={styles.boton}>Registrarse</Text>
            </TouchableHighlight>
        </View >
    )
}

function initialValues() {
    return {
        nombre: "",
        apellido: "",
        nombreUsuario: "",
        correo: "",
        contraseña: "",
    };
}

function validationScheme() {
    return {
        nombre: Yup.string().required("El nombre es obligatorio"),
        apellido: Yup.string().required("El apellido es obligatorio"),
        nombreUsuario: Yup.string().required("El usuario es obligatorio"),
        correo: Yup.string().required("El correo es obligatorio"),
        contraseña: Yup.string().required("La contraseña es obligatoria"),
    };
}

const styles = StyleSheet.create({
    RegistroCon: {
        backgroundColor: '#1E40AF',
        height: '100%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 50,
        color: 'yellow'
    },
    boton: {
        color: '#22C55E',
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'white',
        width: 100,
        textAlign: 'center'
    },
    input: {
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        width: 300,
    }
})

export default SignIn