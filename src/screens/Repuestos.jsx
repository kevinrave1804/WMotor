import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import useAuth from '../hooks/useAuth'
import { ItemRepuestos } from '../components/repuestos/ItemRepuestos'

const Repuestos = () => {
    const { repuestos } = useAuth()

    const data = repuestos?.data?.products;
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (<ItemRepuestos product_title={item.product_title} product_price={item.product_price} product_photo={item.product_photo} />)} />
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