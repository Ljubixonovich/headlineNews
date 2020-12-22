import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import { GET_NEWS_SAGA, SET_COUNTRY_SAGA } from '../../store/actions';
import { LetterCodes } from '../../library/letterCodes';
import { Wrapper, ScrollView, Title, ArticlesWrapper } from '../../components/UI';


export default function TopNews (props) {
  const { selectedCountry, articles } = useSelector(state => state.test);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_NEWS_SAGA, selectedCountry });
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

  return (
    <Wrapper>
      <Header
        title='Top News'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <ScrollView>
        <Title>{getTitle()}</Title>
        <ArticlesWrapper>
          {articles && !!articles.length && articles.map((item, i) => (
            <NewsItem
              key={i}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              onPress={goToArticlePage(item)}
            />
          ))}
        </ArticlesWrapper>
      </ScrollView>
    </Wrapper>
  )
}
