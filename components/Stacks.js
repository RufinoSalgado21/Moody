import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../App';
import CheckIn from './CheckIn';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={App}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name={'Checkin'} component={CheckIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
