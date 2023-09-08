import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import TabNav from '../tabNavigation/TabNav';
import Members from '../tabNavigation/Members';

const Stack = createNativeStackNavigator();

function GetStarted() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GetStarted;
