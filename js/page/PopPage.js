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
import {createMaterialTopTabNavigator, createAppContainer} from "react-navigation";
import NavigationUtil from '../navigator/NavigationUtil';

export default class PopPage extends React.Component {
    render(){
        const TabNav = createMaterialTopTabNavigator({
          PopularTab1:{
              screen: PopularTab,
              navigationOptions: {
                title: 'Tab1'
              }
          },
          PopularTab2:{
              screen: PopularTab,
              navigationOptions: {
                title: 'Tab2'
              }
         }
        });
        const TabNavigator = createAppContainer(TabNav);
        return <TabNavigator />
    }
}

class PopularTab extends React.Component {
  render(){
      const {tabLabel} = this.props;
      return (
          <View style={styles.container}>
              <Text style={styles.welcome}>{tabLabel}</Text>
              <Text onPress={()=>{
                NavigationUtil.goPage("DetailPage",{})
              }}>跳转到详情页</Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
      color: 'red'
  }
});