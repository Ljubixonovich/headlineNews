import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components/native";
import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import { GET_NEWS_SAGA, SET_COUNTRY_SAGA } from '../../store/actions';
import { LetterCodes } from '../../library/letterCodes'; 

const Wrapper = styled.View`
  flex: 1;
  position: relative;
`;
const ScrollView = styled.ScrollView``;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;  
`;
const PageWrapper = styled.View`
  flex: 1;
  padding: 6px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function TopNews (props) {
  const { selectedCountry, articles } = useSelector(state => state.test);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_NEWS_SAGA, selectedCountry, pageSize: 0 });
  }, [selectedCountry])

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }

  const changeLanguageHandler = (selectedCountry) => {
    dispatch({ type: SET_COUNTRY_SAGA, selectedCountry });
  }

  const goToArticlePage = (item) => () => {
    props.navigation.navigate('Article', { article: item });
  }

  const getTitle = () => {
    return LetterCodes.find(c => c.code === selectedCountry).country;
  }

  return(
    <Wrapper>
      <Header
        title='Top News'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <ScrollView>
        <Title>{getTitle()}</Title>
        <PageWrapper>
          {articles && !!articles.length && articles.map((item, i) => (
            <NewsItem 
              key={i}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              onPress={goToArticlePage(item)}
            />
          ))}
        </PageWrapper>
      </ScrollView>
    </Wrapper>
  )
}
