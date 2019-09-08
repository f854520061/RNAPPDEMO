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
  TextInput
} from 'react-native';
export default class FetchDemoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: ''
    }
  }
  loadData() {
    let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
    fetch(url)
      .then(response => {
        if(response.ok){
          return response.text();
        }
        throw new Error('network is bad')
      })
      .then(responseText => {
        this.setState({
          showText: responseText
        })
      })
      .catch(err => {
        this.setState({
          showText: err.toString()
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>FetchDemoPage</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.searchKey = text;
            }}
          />
          <Button
            title="获取"
            onPress={() => {
              this.loadData()
            }}
          />
        </View>
        <Text>
          {this.state.showText}
        </Text>
      </View>
    )
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
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginRight:10
  },
  inputContainer: {
    flexDirection:"row",
    alignItems:"center"
  }
});