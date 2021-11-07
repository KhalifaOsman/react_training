import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from "axios";
import PeopleList from "../components/PeopleList";

export default class PeoplePage extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        setTimeout(() => {
            axios
                .get('https://randomuser.me/api/?nat=br&results=15')
                .then(response => {
                    const {results} = response.data;
                    this.setState({
                        people: results,
                        loading: false
                    })
                }).catch(error => {
                    this.setState({ loading: false, error: true })
                })
        }, 3500)
    }

    renderPage() {
        if(this.state.loading)
            return <ActivityIndicator size="large" color="#000" />

        if(this.state.error)
            return <Text style={ styles.error }>Oops... Algo deu errado =(</Text>

        return (
            <PeopleList people={this.state.people}
            onPressItem={pageParams => (
                this.props.navigation.navigate('PersonDetails', pageParams)
            )} />
        )
    }

    render() {
        return (
            <View style={ styles.container }>
                { this.renderPage() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    error: {
        fontSize: 20,
        color: "red",
        alignSelf: "center"
    }
})
