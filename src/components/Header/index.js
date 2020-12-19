import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import styled from "styled-components/native"; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../library/colors';

const StatusBar = styled.StatusBar``;
const TouchableOpacity = styled.TouchableOpacity``;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: ${Colors.lightBlue};
  padding-left: 24px;
  padding-right: 24px;
`;

const Left = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export default function Header({
  title = '',
  onBackPress = () => {},
  onMenuPress = () => {},
  back = false,
}) {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.lightBlue}
        barStyle="dark-content"
      />

      <Wrapper>

        <Left>
          {back ? (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={onBackPress}
            >
              <Icon
                size={24}
                color="black"
                name="arrow-left"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={onMenuPress}
            >
              <Icon
                size={34}
                color="black"
                name="menu"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          )}
        </Left>

        <Text style={styles.title}>
          {title}
        </Text>

        <View style={styles.iconContainer}>
          {true ? (
            <ActivityIndicator
              color={Colors.black}
              style={styles.activityIndicator}
            />
          ) : (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={onIconPress}
            >
              <Text>En/Us</Text>
            </TouchableOpacity>
          )}
        </View>

      </Wrapper>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: { ...StyleSheet.absoluteFillObject },
  icon: {
    width: 24,
    height: 24,
  },
});
