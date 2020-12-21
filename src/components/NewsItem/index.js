import React from 'react';
import styled from "styled-components/native";
import Colors from '../../library/colors';

const Wrapper = styled.TouchableOpacity`
  margin: 5px;
  padding: 5px;
  width: 185px;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
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

export default function NewsItem({
  title = '',
  description = '',
  urlToImage = '',
  onPress = () => {},
}) {
  return (
    <Wrapper onPress={onPress}>
      <Title>{title}</Title>
      {!!urlToImage ? (
        <Image source={{ uri: urlToImage }} />
        ) : (
        <ImagePlaceholder />
      )}
      <Description>{description}</Description>
    </Wrapper>
  );
}
