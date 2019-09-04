/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import AppNavigators from './navigator/AppNavigators';
import store from './store';

export default class App extends React.Component {
  render(){
    /**
     * 将store传递给App框架
     */
    return <Provider store={store}>
      <AppNavigators/>
    </Provider>
  }
}
