import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Line from '../components/Line'

export default class PersonDetailPage extends React.Component {
    render() {
        const { person } = this.props.route.params

        return (
            <View style={styles.container}>
                <Image source={{ uri: person.picture.large }} style={ styles.avatar } />
                <View style={ styles.detailContainer }>
                    <Line label="E-mail:" content={ person.email } />
                    <Line label="Cidade:" content={ person.location.city } />
                    <Line label="Estado:" content={ person.location.state } />
                    <Line label="Telefone:" content={ person.phone } />
                    <Line label="Celular:" content={ person.cell } />
                    <Line label="Nacionalidade:" content={ person.nat } />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1
    },
    detailContainer: {
        backgroundColor: '#000',
        marginTop: 20,
        elevation: 1
    },
})
