import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from "styled-components/native";
import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import CategoryList from '../../components/CategoryList';
import { newsCategories } from '../../library/newsCategories';
import { GET_NEWS_SAGA, SET_COUNTRY_SAGA } from '../../store/actions';
import { LetterCodes } from '../../library/letterCodes';
import { Wrapper, ScrollView, Title, ArticlesWrapper } from '../../components/UI';
import Colors from '../../library/colors';
import { mock } from '../../../apiKey';

const List = styled.View`
  flex: 1;
`;
const TitleWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const TouchableOpacity = styled.TouchableOpacity``;
const CategoryTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 20px;
`;

const Line = styled.View`
  height: 1px;
  width: 300px;
  background-color: ${Colors.blue};
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
`;

export default function TopNews (props) {
  const [horizontalList, setHorizontalList] = useState(true);

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }

  const changeLanguageHandler = (selectedCountry) => {
    dispatch({ type: SET_COUNTRY_SAGA, selectedCountry });
  }

  const goToArticlePage = (item) => () => {
    props.navigation.navigate('Article', { article: item });
  }

  const toggleExpandListHandler = () => {
    setHorizontalList(!horizontalList);
  }

  return(
    <Wrapper>
      <Header
        title='Categories'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <ScrollView>

        <List>
          <TitleWrapper>
            <CategoryTitle>Title</CategoryTitle>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={toggleExpandListHandler}
            >
              <Icon
                size={30}
                color={Colors.black}
                name={horizontalList ? 'chevron-down' : 'chevron-up'}
              />
            </TouchableOpacity>
          </TitleWrapper>

          {horizontalList ? (
            <CategoryList
              onArticlePress={goToArticlePage}
              news={mock}
            />
            ) : (
          <ArticlesWrapper>
            {mock && !!mock.length && mock.map((item, i) => (
              <NewsItem
                key={i}
                title={item.title}
                description={item.description}
                urlToImage={item.urlToImage}
                onPress={goToArticlePage(item)}
              />
            ))}
          </ArticlesWrapper>)}

          <Line />
        </List>

       
      </ScrollView>
    </Wrapper>
  )
}
