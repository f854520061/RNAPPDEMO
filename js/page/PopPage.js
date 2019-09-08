/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import NavigationUtil from '../navigator/NavigationUtil';

export default class PopPage extends React.Component {
  constructor(props) {
    super(props);
    this.tabNames = ['JAVA', 'Android', 'IOS', 'React', 'React-Native', 'PHP']
  }
  _genTab() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item
        }
      }
    })
    return tabs;
  }
  render() {
    const TabNav = createMaterialTopTabNavigator(
      this._genTab(), {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false, // 是否标签大写,默认为true
        scrollEnabled: true,
        style: {
          backgroundColor: "#678" // TabBar的背景颜色
        },
        indicatorStyle: styles.indicatorStyle, // 标签指示器的样式
        labelStyle: styles.labelStyle // 文字的样式
      }
    }
    );
    const TabNavigator = createAppContainer(TabNav);
    return <TabNavigator />
  }
}

class PopularTab extends React.Component {
  render() {
    const { tabLabel } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Text onPress={() => {
          NavigationUtil.goPage("DetailPage", {})
        }}>跳转到详情页</Text>
        <Button
          title={"Fetch 使用"}
          onPress={() => {
            NavigationUtil.goPage("FetchDemoPage", {})
          }}
        />
        <Button
          title={"AsyncStorage 使用"}
          onPress={() => {
            NavigationUtil.goPage("AsyncStorageDemoPage", {})
          }}
        />
        <Button
          title={"离线缓存框架"}
          onPress={() => {
            NavigationUtil.goPage("DataStoreDemoPage", {})
          }}
        />
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
  },
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white'
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  }
});