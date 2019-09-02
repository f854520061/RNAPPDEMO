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
import NavigationUtil from '../navigator/NavigationUtil'
export default class WelcomePage extends React.Component {
    componentDidMount(){
        this.timer = setTimeout(()=>{
            NavigationUtil.resetToHomePage(this.props)
        },200)
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>WelcomePage</Text>
            </View>
        )
    }
};
// const WelcomePage = () => {
//   return (
//       <View style={styles.container}>
//           <Text style={styles.welcome}>WelcomePage</Text>
//       </View>
//   );
// };

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

// export default WelcomePage;