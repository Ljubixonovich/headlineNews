import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components/native";
import Header from '../../components/Header';
import Category from '../../components/Category';
import { newsCategories } from '../../library/newsCategories';
import { GET_NEWS_SAGA, SET_COUNTRY_SAGA } from '../../store/actions';
import { LetterCodes } from '../../library/letterCodes';
import { Wrapper, ScrollView, Title } from '../../components/UI';
import Colors from '../../library/colors';
import { mock } from '../../../apiKey';


export default function TopNews (props) {

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }

  const changeLanguageHandler = (selectedCountry) => {
    dispatch({ type: SET_COUNTRY_SAGA, selectedCountry });
  }

  const goToArticlePage = (item) => () => {
    props.navigation.navigate('Article', { article: item });
  }

  return(
    <Wrapper>
      <Header
        title='Categories'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <ScrollView>
        <Category
          title={'categs title'}
          articles={mock}
          noTopMargin={true}
          onArticlePress={goToArticlePage}
        />

      </ScrollView>
    </Wrapper>
  )
}
