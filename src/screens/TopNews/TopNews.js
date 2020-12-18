import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TopNews (props) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TopNews Screen</Text>
      <Button
        title='Article'
        onPress={() => {props.navigation.push('Article')}}
      />
    </View>
  )
}
