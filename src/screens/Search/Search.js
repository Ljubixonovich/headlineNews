import React from 'react';
import { View, Text, Button, } from 'react-native';
import Header from '../../components/Header';

export default function Search (props) {
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }

  const changeLanguageHandler = (input) => {
    alert(input)
  }
  return(
    <>
      <Header
        title='Search'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search Screen</Text>
      </View>
    </>
  )
}
