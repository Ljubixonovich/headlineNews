import React from 'react';
import { Linking } from 'react-native';
import styled from "styled-components/native";
import Header from '../../components/Header';
import Colors from '../../library/colors'; 

const Wrapper = styled.View`
  flex: 1;
`;
const ScrollView = styled.ScrollView``;
const PageWrapper = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const ImageWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 14px;
`;
const Image = styled.Image`
  width: 250px;
  height: 250px;
`;
const Content = styled.Text`
  font-size: 15px;
`;
const ButtonWrapper = styled.TouchableOpacity`
  margin-top: 14px;
`;
const ButtonText = styled.Text`
  color: ${Colors.blue};
`;

export default function Article (props) {
  const { article } = props.route.params;

  const handleBack = () => {
    props.navigation.pop();
  }

  const linkPressHandler = () => {
    article.url && Linking.openURL(article.url);
  }

  return(
    <Wrapper>
      <Header
        title="Article News"
        back
        onBackPress={handleBack}
      />
      <ScrollView>
        <PageWrapper>
          <Title>{article.title}</Title>
          <ImageWrapper>
            <Image source={{ uri: article.urlToImage }} />
          </ImageWrapper>
          <Content>{article.content}</Content>
          <ButtonWrapper onPress={linkPressHandler}>
            <ButtonText>Read more online</ButtonText>
          </ButtonWrapper>
        </PageWrapper>
      </ScrollView>
    </Wrapper>
  )
}
