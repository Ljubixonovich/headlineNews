import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Search from '../Search';
import Article from '../Article';

const Stack = createStackNavigator();

export default function ({
  initialRouteName = 'Search',
}) {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={initialRouteName}
    >
      <Stack.Screen
        key='Search'
        name='Search'
        component={Search}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />

      <Stack.Screen
        key="Article"
        name="Article"
        component={Article}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
    </Stack.Navigator>
  );
}