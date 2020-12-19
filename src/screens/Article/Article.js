import React from 'react';
import { View, Text, } from 'react-native';
import Header from '../../components/Header';

export default function Article (props) {

  const handleBack = () => {
    props.navigation.pop();
  }
  return(
    <>
      <Header
        title="Article News"
        back
        onBackPress={handleBack}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    </>
  )
}
