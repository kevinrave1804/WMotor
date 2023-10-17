import AsyncStorage from '@react-native-async-storage/async-storage'

export async function obtenerUsuario() {
    try {
        const response = await AsyncStorage.getItem('usuario')
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
        await AsyncStorage.setItem('usuario', JSON.stringify(users))
        console.log("Usuario agregado");
    } catch (error) {
        console.error(error)
    }
}

export async function eliminarAlmacenamiento() {
    try {
        await AsyncStorage.removeItem('usuario')
        console.log('Eliminado');
    } catch (error) {
        console.error(error)
    }
}