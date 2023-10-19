import AsyncStorage from '@react-native-async-storage/async-storage'
import { USUARIOS } from '../util/constantes'

export async function obtenerUsuario() {
    try {
        const response = await AsyncStorage.getItem(USUARIOS)
        return response != null ? JSON.parse(response) : [{
            nombre: 'Kevin',
            apellidos: 'Ramirez Velez',
            email: 'kevinrave1804@gmail.com',
            nombreUsuario: 'kevinrave1804',
            contraseña: '12345678'
        }]
    } catch (error) {
        console.error(error);
    }
}

export async function guardarUsuario(usuario) {
    try {
        const users = await obtenerUsuario()
        users.push(usuario)
        await AsyncStorage.setItem(USUARIOS, JSON.stringify(users))
        console.log("Usuario agregado");
    } catch (error) {
        console.error(error)
    }
}

export async function eliminarAlmacenamiento() {
    try {
        await AsyncStorage.removeItem(USUARIOS)
        console.log('Eliminado');
    } catch (error) {
        console.error(error)
    }
}