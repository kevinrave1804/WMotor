import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductoCar = () => {
    const [count, setCount] = useState(0);

    const item = {
        product_title: 'BULL BOOST PERFORMANCE GEN II GT35 GTX3582 Billet Wheel Turbo .82 A/R T4 Vband Turbina Vivienda Anti-sobretensión 6262',
        product_price: '389.95',
        product_photo: 'https://m.media-amazon.com/images/I/711ZAYISDKL._AC_SL1500_.jpg'
    }

    const aumentar = () => {
        setCount(count + 1);
    };

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    return (
        <View style={styles.cartProduct}>
            <Image style={styles.image} source={{ uri: item.product_photo }} />
            <View style={styles.description}>
                <Text style={styles.name}>{item.product_title}</Text>
                <Text style={styles.price}>{item.product_price} $</Text>
            </View>
            <View style={styles.counter}>
                <TouchableOpacity onPress={disminuir}>
                    <Text style={styles.counterText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{count}</Text>
                <TouchableOpacity onPress={aumentar}>
                    <Text style={styles.counterText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    description: {
        flex: 1,
        marginLeft: 20,
    },
    name: {
        fontSize: 16,
        color: '#333',
    },
    price: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    counterText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
    },
});

export default ProductoCar;