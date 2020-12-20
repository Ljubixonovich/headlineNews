import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivityIndicator from '../ActivityIndicator';
import Colors from '../../library/colors';

const StatusBar = styled.StatusBar``;
const TouchableOpacity = styled.TouchableOpacity``;
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
  justify-content: space-between;
`;
const LanguageText = styled.Text`
  font-weight: ${({selected}) => (selected ? 'bold' : 'normal')};
  color: ${({disabled}) => (disabled ? Colors.blue : Colors.black)};
`;

export default function Header({
  title = '',
  back = false,
  onBackPress = () => {},
  onMenuPress = () => {},
  changeLanguage = () => {},
}) {

  const { selectedCountry, loading } = useSelector(state => state.test);

  const change_gb = () => {
    changeLanguage('gb')
  }

  const change_us = () => {
    changeLanguage('us')
  }

  return (
    <>
      <StatusBar
        backgroundColor={Colors.lightBlue}
        barStyle="dark-content"
      />

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
                onPress={change_gb}
                activeOpacity={0.75}
                disabled={selectedCountry === 'gb'}
              >
                <LanguageText
                  disabled={back}
                  selected={selectedCountry === 'gb'}
                >
                  GB
                </LanguageText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={change_us}
                activeOpacity={0.75}
                disabled={selectedCountry === 'us'}
              >
                <LanguageText
                  disabled={back}
                  selected={selectedCountry === 'us'}
                >
                  US
                </LanguageText>
              </TouchableOpacity>
            </>
          )}
        </Languages>

      </Wrapper>
    </>
  );
}
