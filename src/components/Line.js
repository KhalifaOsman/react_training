import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "" }) => {
    return(
        <View style={styles.line}>
            <Text style={[
                styles.cell,
                styles.label,
                label.length > 15 ? styles.longLabel : null
            ]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
    },
    cell: {
        color: "#FFF",
        fontSize: 15,
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: "#FFF"
    },
    label: {
        fontWeight: "bold",
        flex: 2
    },
    content: {
        flex: 4
    },
    longLabel: {
        fontSize: 13
    }
})

export default Line
