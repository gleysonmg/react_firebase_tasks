import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Tasks from './pages/Tasks';
import NewTask from './pages/NewTask';
import Details from './pages/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tasks'>
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{
            headerTintColor: "#F92E6A"
          }}
        />
        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#F92E6A"
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#F92E6A"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
