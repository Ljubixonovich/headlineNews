import React from 'react';
import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const { width: winWidth } = Dimensions.get('window');

const Wrapper = styled.TouchableOpacity`
  padding: 5px;
  width: ${winWidth * 0.6}px;
  height: 120px;
`;
const Title = styled.Text`
  font-weight: bold;
`;
const Image = styled.Image`
  align-self: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 60px;
  height: 60px;
`;
const ImagePlaceholder = styled.View`
  align-self: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 60px;
  height: 60px;
`;
const Description = styled.Text`
  font-size: 13px;
`;

export default function ListItem({
  title = '',
  description = '',
  urlToImage = '',
  onPress = () => {},
}) {

  const getTitle = () => {
    return !!title && title.length > 28 ? title.slice(0, 27).concat('...') : title;
  }

  const getDescription = () => {
    return !!description && description.length > 29 ? description.slice(0, 28).concat('...') : description;
  }

  return (
    <Wrapper onPress={onPress}>
      <Title>{getTitle()}</Title>
      {!!urlToImage ? (
        <Image source={{ uri: urlToImage }} />
        ) : (
        <ImagePlaceholder />
      )}
      <Description>{getDescription()}</Description>
    </Wrapper>
  );
}
