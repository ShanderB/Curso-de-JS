import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/navegation/navigator'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'RobotBold' : require('./src/fonts/Roboto-Bold.ttf'),
      'RobotRegular' : require('./src/fonts/Roboto-Regular.ttf')
    })
    this.setState({isFontLoaded:true})
  }

  render() {
    return (
      (this.state.isFontLoaded === true)?(<AppNavigator/>):(<AppLoading/>)
    )
  }
}

