import React from 'react'
import { useRef } from 'react'
import { View, StyleSheet, Image, Dimensions, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const imagenes = ['https://images.unsplash.com/photo-1686997877408-2d60e7ef9227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80', 'https://images.unsplash.com/photo-1637014786969-c048cec39e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1539858997092-d526a54ed2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1455138183306-12dfce6f541b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1570&q=80', 'https://images.unsplash.com/photo-1627642597814-eb117a851f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://plus.unsplash.com/premium_photo-1661962327591-1b7072da3242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1606&q=80', 'https://plus.unsplash.com/premium_photo-1664300172306-41bca5f29910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80']

const ancho = Dimensions.get('window').width
const alto = Dimensions.get('window').height

const ANCHO_CONTENERDOR = ancho * 0.5
const ESPACIO = 10
const ALTURA_BACKDROP = alto * 0.45

const Fondo = ({ scrollX }) => {
    return (
        <View style={([{
            height: ALTURA_BACKDROP,
            width: ancho,
            position: 'absolute',
            top: 0,
        }], StyleSheet.absoluteFillObject)}>
            {imagenes.map((item, index) => {
                const inputRange = [
                    (index - 1) * ANCHO_CONTENERDOR,
                    index * ANCHO_CONTENERDOR,
                    (index + 1) * ANCHO_CONTENERDOR,
                ]

                const outputRange = [0, 1, 0]

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange,
                });
                return (
                    <Animated.Image
                        source={{ uri: item }}
                        key={index}
                        style={{
                            height: ALTURA_BACKDROP,
                            width: ancho,
                            position: 'absolute',
                            top: 0,
                            opacity
                        }} />
                )
            })}
            <LinearGradient
                colors={['transparent', '#1E40AF']}
                style={{
                    height: ALTURA_BACKDROP,
                    width: ancho,
                    position: 'absolute',
                    top: 0,
                }} />
        </View>
    )
}

const Carrusel = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    return (
        <View>
            <Fondo scrollX={scrollX} />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                data={imagenes}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToInterval={ANCHO_CONTENERDOR}
                contentContainerStyle={{ paddingTop: 100 }}
                scrollEventThrottle={16}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENERDOR,
                        index * ANCHO_CONTENERDOR,
                        (index + 1) * ANCHO_CONTENERDOR,
                    ]

                    const outputRange = [0, -50, 0]

                    const scrollY = scrollX.interpolate({
                        inputRange,
                        outputRange,
                    });
                    return (
                        <View style={{ width: ANCHO_CONTENERDOR }}>
                            <Animated.View style={{
                                marginHorizontal: ESPACIO,
                                padding: ESPACIO,
                                borderRadius: 34,
                                alignItems: 'center',
                                backgroundColor: 'white',
                                transform: [{ translateY: scrollY }],
                            }}>
                                <Image source={{ uri: item }} style={styles.posterImage} />
                            </Animated.View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E40AF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    posterImage: {
        width: '100%',
        height: ANCHO_CONTENERDOR * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10
    }
})

export { Carrusel }