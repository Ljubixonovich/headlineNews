import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header';

export default function TopNews (props) {

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }

  const changeLanguageHandler = (input) => {
    alert(input)
  }

  return(
    <>
      <Header
        title='Categories'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Categories Screen</Text>
        <Button
          title='Article'
          onPress={() => {props.navigation.push('Article')}}
        />
      </View>
    </>
  )
}
