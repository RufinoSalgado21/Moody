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
import Homescreen from './components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App: () => Node = () => {
  const MyStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen
          name={'Home'}
          component={Homescreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <MyStack.Screen
          name={'Checkin'}
          component={CheckIn}
          options={{headerShown: false}}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
