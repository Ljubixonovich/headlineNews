import React from 'react';
import { View, Text, Button, } from 'react-native';

export default function Search (props) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
      <Button 
        title="Article screen" 
        onPress={() => {props.navigation.push('Article')}} 
      />
    </View>
  )
}
