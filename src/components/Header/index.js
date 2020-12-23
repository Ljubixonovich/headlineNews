import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Animated,
} from 'react-native';
import { useSelector } from 'react-redux';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LetterCodes } from '../../library/letterCodes';
import ActivityIndicator from '../ActivityIndicator';
import Overlay from '../Overlay';
import Colors from '../../library/colors';

const StatusBar = styled.StatusBar``;
const TouchableOpacity = styled.TouchableOpacity``;
const View = styled.View``;
const Text = styled.Text``;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: ${Colors.lightBlue};
  padding-left: 20px;
  padding-right: 20px;
`;
const LeftIcon = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.black};
  text-align: center;
`;
const Languages = styled.View`
  flex-direction: row;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
const LanguageText = styled.Text`
  font-size: 20px;
  font-weight: ${({selected}) => (selected ? 'bold' : 'normal')};
  color: ${({disabled}) => (disabled ? Colors.gray : Colors.black)};
`;
const HeaderOption = styled.TouchableOpacity`
  padding: 10px;
`;

export default function Header({
  title = '',
  back = false,
  onBackPress = () => {},
  onMenuPress = () => {},
  changeLanguage = () => {},
}) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { selectedCountry, loading } = useSelector(state => state.test);

  useEffect(() => {
    optionsVisible && fadeIn();
  }, [optionsVisible])

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const toggleOptionsVisible = () => {
    setOptionsVisible(optionsVisible ? false : true);
  }

  const optionPressHandler = (item) => () => {
    setOptionsVisible(false);
    changeLanguage(item.code);
  }

  return (
    <>
      <StatusBar
        backgroundColor={Colors.lightBlue}
        barStyle="dark-content"
      />

      <View>
        <Wrapper>

          <LeftIcon>
            {back ? (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={onBackPress}
              >
                <Icon
                  size={30}
                  color={Colors.black}
                  name="arrow-left"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={onMenuPress}
              >
                <Icon
                  size={30}
                  color={Colors.black}
                  name="menu"
                />
              </TouchableOpacity>
            )}
          </LeftIcon>

          <Title>{title}</Title>

          <Languages>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <>
                <TouchableOpacity
                  onPress={toggleOptionsVisible}
                  activeOpacity={0.75}
                  disabled={back}
                >
                  <LanguageText
                    disabled={back}
                  >
                    {selectedCountry.toUpperCase()}
                  </LanguageText>
                </TouchableOpacity>
              </>
            )}
          </Languages>

        </Wrapper>

        {optionsVisible && (
          <Animated.View style={[
              styles.headerOptions,
              { opacity: fadeAnim }
            ]}
          >
            {LetterCodes.length > 0 && LetterCodes.map((item, i) => (
              <HeaderOption
                key={i}
                activeOpacity={0.75}
                onPress={optionPressHandler(item)}
              >
                <Text>
                  {item.country}
                </Text>
              </HeaderOption>
            ))}
          </Animated.View>
        )}
      </View>

      {optionsVisible && (
        <Overlay onPress={toggleOptionsVisible} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerOptions: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: 'white',
    borderColor: '#d7d7d7',
    borderWidth: 1,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    zIndex: 100,
  },
});