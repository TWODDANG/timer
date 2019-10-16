import {createAppContainer} from "react-navigation";
import Timer from "./components/Timer/";
import Setting from './components/Setting'
import {createStackNavigator} from 'react-navigation-stack'
import React, {Component} from 'react';



const MainStackNavigation = createStackNavigator(
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

const createMainNavigation = createAppContainer(MainStackNavigation);



export default createMainNavigation
