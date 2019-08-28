import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StackNavigator from './stack/StackNavigator';
import SwitchNavigator from './switch/SwitchNavigator';

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:20}}>
          <SwitchNavigator/>
        </View>
    );
  }
}
