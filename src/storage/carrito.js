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
        const idProductosCarrito = productosCarrito.map((item) => { return item.id })
        if (!includes(idProductosCarrito, producto.id)) {
            productosCarrito.push(producto)
            await AsyncStorage.setItem(`${nombreUsuario}${CARRITO}`, JSON.stringify(productosCarrito))
            console.log("Producto agregado");
        } else {
            console.log('El producto ya existe en el carrito');
        }
    } catch (error) {
        console.error(error);
    }
}

export async function verificarProductoCarrito(nombreUsuario, producto) {
    try {
        const productosCarrito = await obtenerProductosCarrito(nombreUsuario)
        const idProductosCarrito = productosCarrito.map((item) => { return item.id })
        return includes(idProductosCarrito, producto.id)
    } catch (error) {
        console.error(error);
    }
}

export async function eliminarProductoCarrito(nombreUsuario, producto) {
    try {
        const response = await obtenerProductosCarrito(nombreUsuario)
        const productosCarrito = response.filter((item) => { return item.id !== producto.id })
        await AsyncStorage.setItem(`${nombreUsuario}${CARRITO}`, JSON.stringify(productosCarrito))
    } catch (error) {
        console.error(error);
    }
}

export async function eliminarProductos(nombreUsuario) {
    try {
        await AsyncStorage.removeItem(`${nombreUsuario}${CARRITO}`)
    } catch (error) {
        console.error(error);
    }
}