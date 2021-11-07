import React from 'react';
import { View, StyleSheet} from 'react-native';
import PeopleListItem from "./PeopleListItem";

const PeopleList = props => {
    const { people, onPressItem } = props;

    const items = people.map(person =>
        <PeopleListItem key={person.name.first} person={person} navigateToPersonDetails={onPressItem}/>
    )

    return (
        <View style={styles.container}>
            { items }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    }
})

export default PeopleList