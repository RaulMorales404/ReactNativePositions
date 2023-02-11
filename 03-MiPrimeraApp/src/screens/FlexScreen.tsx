import React from 'react'
import { View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.caja1} />
            <View style={styles.caja2} />
            <View style={styles.caja3} />

        </View>
    );
};
// 1,2,3,4,5,6,7,8,9
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',

    },
    caja1: {

        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
    },
    caja2: {
        width: 100,
        height: 100,
        borderWidth: 10, 
        borderColor: 'white',
        backgroundColor: '#f0a23b',
    },
    caja3: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28c4d9',

    },
});
export default FlexScreen;
