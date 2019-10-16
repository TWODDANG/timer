import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from "./components/Timer";
import reducer from './reducer';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import MainNavigation from "./MainNavigaton";
import * as Font from 'expo-font';


let store = createStore(reducer);


export default class App extends React.Component {

  render(){
    return <Provider store={store}>
      <MainNavigation/>
    </Provider>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
