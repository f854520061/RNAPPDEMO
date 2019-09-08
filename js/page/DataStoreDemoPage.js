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
    Button,
    TextInput,
    AsyncStorage
} from 'react-native';
import DataStore from '../expand/dao/DataStore';
const KEY = 'SAVE_KEY';
export default class DataStoreDemoPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showText: ''
        }
        this.DataStore = new DataStore();
    }
    loadData() {
        let url = `https://api.github.com/search/repositories?q=${this.value}`;
        this.DataStore.fetchData(url)
        .then(data=>{
            let showData = `初次加载数据时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
            this.setState({
                showText: showData
            })
        }).catch(e=>{
            e && console.log(e.toString())
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>离线缓存框架设计</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        this.value = text;
                    }}
                />
                <Text
                    onPress={()=>{
                        this.loadData();
                    }}
                >
                    获取
                </Text>
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        )
    }
    doSave() {
        AsyncStorage.setItem(KEY, this.value, error => {
            error && console.log(error.toString())
        })
    }
    doRemove() {
        AsyncStorage.removeItem(KEY, error => {
            error && console.log(error.toString())
        })
    }
    getData() {
        AsyncStorage.getItem(KEY, (error, value) => {
            this.setState({
                showText: value
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        color: 'red'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});