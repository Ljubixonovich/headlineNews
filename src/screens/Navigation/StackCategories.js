import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Categories from '../Categories'
import Article from '../Article'

const Stack = createStackNavigator()

export default function ({ initialRouteName = 'Categories' }) {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
      <Stack.Screen
        key="Categories"
        name="Categories"
        component={Categories}
        options={{ ...TransitionPresets.SlideFromRightIOS }}
      />

      <Stack.Screen key="Article" name="Article" component={Article} options={{ ...TransitionPresets.SlideFromRightIOS }} />
    </Stack.Navigator>
  )
}
