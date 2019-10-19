import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import MainNavigation from "./MainNavigaton";
import {persistStore, persistReducer} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {AsyncStorage} from "react-native";
import * as Font from "expo-font";
import {actionCreators as tomatoActions} from "./components/actions";
import {AppLoading} from "expo";
import rootReducer from "./components/reducer";

//ㅄ 같은 자동 import 기능..
// fontload를 어디서 누가 true로 받아온다. => persist 가 문제일 거 같은데

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
      'persisted'
  ],
  blacklist: [
      'other'
  ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


let store = createStore(persistedReducer);

let persistor = persistStore(store);



export default class App extends Component {

  render(){
      return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation/>
        </PersistGate>
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
