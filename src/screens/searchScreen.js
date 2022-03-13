import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, parameters, heading, text } from "../global/styles"

const searchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>hi</Text>
        </View>
    )
}

export default searchScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:50
    },
    text: {
        color: colors.grey2,
        marginLeft: 52
    }
});