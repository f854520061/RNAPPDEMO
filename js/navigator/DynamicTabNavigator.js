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
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator, createAppContainer, BottomTabBar } from "react-navigation";
import PopPage from '../page/PopPage';
import TrendingPage from '../page/TrendingPage';
import FavPage from '../page/FavPage';
import MyPage from '../page/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from './NavigationUtil';
const TABS = { // 在这里配置一些路由页面
    PopPage: {
        screen: PopPage,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{ color: tintColor }}
                />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: "趋势",
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{ color: tintColor }}
                />
            )
        }
    },
    FavPage: {
        screen: FavPage,
        navigationOptions: {
            tabBarLabel: "收藏",
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{ color: tintColor }}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({ tintColor, focused }) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{ color: tintColor }}
                />
            )
        }
    }
}

export default class DynamicTabNavigator extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    _tabNavigator() {
        const {PopPage,TrendingPage,FavPage,MyPage} = TABS;
        const tabs = {PopPage,TrendingPage,FavPage,MyPage}; // 根据需要定制显示的tab
        PopPage.navigationOptions.tabBarLabel = '最新'; // 动态配置Tab属性
        return createAppContainer(createBottomTabNavigator(tabs,{
            tabBarComponent: TabBarComponent
        }))
    }
    render() {
        const Tab = this._tabNavigator();
        return <Tab />
    }
}

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }
    render() {
        const {routes, index} = this.props.navigation.state;
        if(routes[index].params){
            const {theme} = routes[index].params;
            //以最新的更新时间为主，防止被其他tab之前的修改覆盖掉
            if(theme&&theme.updateTime>this.theme.updateTime){
                this.theme = theme;
            }
        }
        return <BottomTabBar 
            {...this.props}
            activeTintColor = {this.theme.tintColor||this.props.activeTintColor}
        />
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