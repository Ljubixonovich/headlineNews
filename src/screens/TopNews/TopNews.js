import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header';

export default function TopNews (props) {

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }

  return(
    <>
      <Header
        title="Top News"
        onMenuPress={toggleDrawer}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TopNews Screen</Text>
        <Button
          title='Article'
          onPress={() => {props.navigation.push('Article')}}
        />
      </View>
    </>
  )
}
