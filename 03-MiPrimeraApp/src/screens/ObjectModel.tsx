import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ObjectModel = () => {
    return (
        <View>
            <Text style={styles.text}>
                ObjectModel
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        backgroundColor:'red',
    },
});



export default ObjectModel;
