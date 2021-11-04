import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PeopleListItem = props => {
    const { person } = props;
    const { first } = person.name;
    return (
        <View style={styles.line}>
            <Text style={styles.lineText}>{first}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
});

export default PeopleListItem;
