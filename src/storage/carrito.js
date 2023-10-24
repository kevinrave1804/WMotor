import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes } from 'lodash';
import { CARRITO } from "../util/constantes";

export async function obtenerProductosCarrito(nombreUsuario) {
    try {
        const response = await AsyncStorage.getItem(`${nombreUsuario}${CARRITO}`)
        return JSON.parse(response || '[]')
    } catch (error) {
        console.error(error);
    }
}

export async function guardarProductoCarrito(nombreUsuario, producto) {
    try {
        const productosCarrito = await obtenerProductosCarrito(nombreUsuario)

        if (productosCarrito.includes(producto)) {
            console.log("Hola mundo")
            console.log('El producto ya existe en el carrito');

        } else {
            productosCarrito.push(producto)
            await AsyncStorage.setItem(`${nombreUsuario}${CARRITO}`, JSON.stringify(productosCarrito))
            console.log('Producto guardado en el carrito');
        }
    } catch (error) {
        console.error(error);
    }
}

export async function eliminarProductoCarrito(nombreUsuario, producto) {
    try {
        const productosCarrito = await obtenerProductosCarrito()
        const nuevosProductosCarrito = productosCarrito.filter((item) => { item !== producto })
        await AsyncStorage.setItem(`${nombreUsuario}${CARRITO}`, JSON.stringify(nuevosProductosCarrito))
    } catch (error) {
        console.error(error);
    }
}