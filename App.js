/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import CheckIn from './components/CheckIn';
import CreateAccount from './components/CreateAccount';
import HomeScreen from './components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const App: () => Node = () => {
  const MyStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <MyStack.Navigator>
        <MyStack.Screen
          name={'Checkin'}
          component={CheckIn}
          options={{headerShown: false}}
        />
        <MyStack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <MyStack.Screen
          name={'CreateAccount'}
          component={CreateAccount}
          options={{headerShown: false}}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
