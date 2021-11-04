import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from "./src/pages/peoplePage";

const AppNavigator = createStackNavigator({
    Main: {
        screen: PeoplePage
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
