import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { capitalizaFirstLetter } from "../util";

const PeopleListItem = props => {
    const { person, navigateToPersonDetails } = props;
    const { title, first, last} = person.name;
    return (
        <TouchableHighlight onPress={() => {
            navigateToPersonDetails({ person })
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: person.picture.thumbnail}} />
                <Text style={styles.lineText}>
                    {`${
                        capitalizaFirstLetter(title)
                    } ${
                        capitalizaFirstLetter(first)
                    } ${
                        capitalizaFirstLetter(last)
                    }`}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#FFF",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        color: "#FFF",
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
});

export default PeopleListItem;
