import {createAppContainer} from "react-navigation";
import Timer from "./components/Timer/";
import Setting from './components/Setting'
import {createStackNavigator} from 'react-navigation-stack'


const MainNavigation = createStackNavigator(
    {
        Timer: {screen: Timer, navigationOptions: {header: null}},
        Setting: {
            screen: Setting,
        }
    },
    {
        headerMode: 'screen',
        headerBackTitleVisible: false,
    }
);

export default createAppContainer(MainNavigation);