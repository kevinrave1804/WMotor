import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Carrusel } from '../components/Eventos/Carrusel'
import { EventosItem } from '../components/Eventos/EventosItem'

const Eventos = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[{}]}
                renderItem={() => (
                    <View>
                        <Carrusel />
                        <EventosItem />
                    </View>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E40AF',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Eventos