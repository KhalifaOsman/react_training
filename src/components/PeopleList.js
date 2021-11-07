import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import PeopleListItem from "./PeopleListItem";

const PeopleList = props => {
    const { people, onPressItem } = props;

    return (
        <FlatList
            style={ styles.container }
            data={ people }
            renderItem={({ item }) => (
                <PeopleListItem
                    person={ item }
                    navigateToPersonDetails={ onPressItem } />
            )}
            keyExtractor={item => item.name.first + item.name.middle + item.name.last} />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    }
})

export default PeopleList
