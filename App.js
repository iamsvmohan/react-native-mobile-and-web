/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useEffect } from 'react';
import { Platform } from "react-native";


// class App extends Component {

//   // useEffect(async ()=>{
//   //     await Font.loadAsync({
//   //       Roboto: require('native-base/Fonts/Roboto.ttf'),
//   //       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//   //       ...Ionicons.font,
//   //     });
//   // },[])
//   render() {
//     return (
//       <>
//         <Login />
//       </>
//     )
//   }
// }


import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import PodList from './src/screens/PodList'
import PodSubmitForm from './src/screens/PodSubmitForm'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const isWeb = Platform.OS === 'web';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  PodList:{
    screen:PodList
  },
  PodSubmitForm:{
    screen:PodSubmitForm
  }
});

const routes = {
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  PodList:{
    screen:PodList
  },
  PodSubmitForm:{
    screen:PodSubmitForm
  }
}

const container = isWeb ? createBrowserApp(createSwitchNavigator(routes)) : createAppContainer(AppNavigator);

export default container;   