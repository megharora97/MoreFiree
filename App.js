import * as React from 'react';
import { LogBox, Text, View, Platform, StatusBar, } from 'react-native';
import MainNavigator from './src/Navigator';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import Reducer from './src/redux/reducers/actionreducers'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor, firebaseProps } from './src/redux/store/index';
import {
  ReactReduxFirebaseProvider,
  
} from 'react-redux-firebase'

StatusBar.setBarStyle('light-content');
if (Platform.OS != 'ios') {
  StatusBar.setBackgroundColor('black');
  StatusBar.setHidden(false)
}
LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed', 'VirtualizedLists should never be nested', "Require cycle:", "YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.", "Animated: `useNativeDriver` was not specified"])


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ReactReduxFirebaseProvider {...firebaseProps}>
            <MainNavigator />
          </ReactReduxFirebaseProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;