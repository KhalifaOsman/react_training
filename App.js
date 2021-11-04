import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import axios from "axios";
import PeopleList from "./src/components/PeopleList";

export default class App extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=br&results=5')
            .then(response => {
                const { results } = response.data;
                this.setState({
                    people: results
                })
        })
    }

    render() {
        return (
            <View>
                <Header title="People"/>
                <PeopleList people={this.state.people} />
            </View>
        );
    }
}
