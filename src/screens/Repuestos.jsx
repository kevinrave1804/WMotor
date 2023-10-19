import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import useAuth from '../hooks/useAuth'
import { ItemRepuestos } from '../components/repuestos/ItemRepuestos'

const Repuestos = () => {
    const { repuestos } = useAuth()

    // const data = repuestos?.data?.products;
    // product_title={item.product_title} product_price={item.product_price} product_photo={item.product_photo}
    const data = [
        {
            id: 147,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 148,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 149,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 150,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 151,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 152,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 153,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 154,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 155,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 156,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

        {
            id: 157,
            product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
            product_price: '389.95',
            product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
        },

    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (<ItemRepuestos producto={item} />)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E40AF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Repuestos