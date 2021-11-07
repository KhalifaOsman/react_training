import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PeoplePage from "./src/pages/peoplePage";
import PersonDetailPage from "./src/pages/PersonDetailPage";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={options}>
                <Stack.Screen name="People" component={PeoplePage} />
                <Stack.Screen name="PersonDetails" component={PersonDetailPage} options={({
                route}) => ({title: route.params.person.name.first})} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const options = {
    headerStyle: {
        backgroundColor: "#808080",
        borderBottomWidth: 1,
        borderBottomColor: "#FFF"
    },
    headerTitleStyle: {
        fontSize: 30,
        color: "#000",
    },
    headerTintColor: "#000",
    headerTitleAlign: "center",

}
