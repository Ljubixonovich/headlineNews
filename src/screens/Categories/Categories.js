import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Category from '../../components/Category';
import { newsCategories } from '../../library/newsCategories';
import { GET_NEWS_WITH_CATEGORIES_SAGA, SET_COUNTRY_SAGA } from '../../store/actions';
import { Wrapper, ScrollView } from '../../components/UI';

export default function Categories (props) {
  const {
    selectedCountry,
    articles_business,
    articles_entertainment,
    articles_health,
    articles_science,
    articles_sports,
    articles_technology,
  } = useSelector(state => state.test);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_NEWS_WITH_CATEGORIES_SAGA,
      selectedCountry,
      categories: newsCategories
    });
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

  const getArticles = (item) => {
    switch (item) {
      case 'business':
        return articles_business;
        break;
      case 'entertainment':
        return articles_entertainment;
        break;
      case 'health':
        return articles_health;
        break;
      case 'science':
        return articles_science;
        break;
      case 'sports':
        return articles_sports;
        break;
      case 'technology':
        return articles_technology;
        break;
      default:
        return [];
        break;
    }
  }

  return (
    <Wrapper>
      <Header
        title='Categories'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <ScrollView>
        {newsCategories.map((item, i) => (
          <Category
            key={item}
            name={item}
            articles={getArticles(item)}
            selectedCountry={selectedCountry}
            noTopMargin={i === 0 ? true : false}
            onArticlePress={goToArticlePage}
          />
        ))}
      </ScrollView>
    </Wrapper>
  )
}
