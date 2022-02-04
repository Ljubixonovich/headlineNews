import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import TopNews from '../TopNews'
import Article from '../Article'

const Stack = createStackNavigator()

export default function ({ initialRouteName = 'TopNews' }) {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
      <Stack.Screen key="TopNews" name="TopNews" component={TopNews} options={{ ...TransitionPresets.SlideFromRightIOS }} />

      <Stack.Screen key="Article" name="Article" component={Article} options={{ ...TransitionPresets.SlideFromRightIOS }} />
    </Stack.Navigator>
  )
}
