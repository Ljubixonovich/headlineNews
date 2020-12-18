import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackTopNews from './StackTopNews';
import StackCategories from './StackCategories';
import StackSearch from './StackSearch';

const Drawer = createDrawerNavigator();

const Stack_TopNews = () => (
  <StackTopNews initialRouteName="TopNews" />
  );

const Stack_Categories = () => (
  <StackCategories initialRouteName="Categories" />
);

const Stack_Search = () => (
  <StackSearch initialRouteName="Search" />
);

export default function ({
  initialRouteName = 'TopNews',
}) {
  return (
    <Drawer.Navigator
      initialRouteName={initialRouteName}
    >
      <Drawer.Screen
        key="TopNews"
        name="TopNews"
      >
        {Stack_TopNews}
      </Drawer.Screen>

      <Drawer.Screen
        key="Categories"
        name="Categories"
      >
        {Stack_Categories}
      </Drawer.Screen>

      <Drawer.Screen
        key="Search"
        name="Search"
      >
        {Stack_Search}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
}