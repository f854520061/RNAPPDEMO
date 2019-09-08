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
const KEY = 'SAVE_KEY';
export default class AsyncStorageDemoPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showText: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>AsyncStorage 使用</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        this.value = text;
                    }}
                />
                <View style={styles.inputContainer}>
                    <Text onPress={() => {
                        this.doSave();
                    }}>
                        存储
            </Text>
                    <Text onPress={() => {
                        this.doRemove();
                    }}>
                        删除
            </Text>
                    <Text onPress={() => {
                        this.getData();
                    }}>
                        获取
            </Text>
                </View>
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