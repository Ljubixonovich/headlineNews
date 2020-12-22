import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components/native";
import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import { GET_NEWS_SAGA, SET_COUNTRY_SAGA } from '../../store/actions';
import { LetterCodes } from '../../library/letterCodes';
import Colors from '../../library/colors';

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
const SearchWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const InputSearch = styled.TextInput`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${Colors.white};
  border-radius: 5px;
  padding: 10px;
  width: 250px;
`;
const ButtonSearch = styled.TouchableOpacity``;
const ArticlesWrapper = styled.View`
  flex: 1;
  padding: 6px;
  flex-direction: row;
  flex-wrap: wrap;
`;
const FallbackText = styled.Text`
  align-self: center;
  margin-top: 10px;
`;

export default function Search (props) {
  const [search, setSearch] = useState('');
  const { selectedCountry, articlesWithSearchTerm, articles } = useSelector(state => state.test);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_NEWS_SAGA, selectedCountry, search: search.trim().toLowerCase() });
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

  const setSearchInput = (input) => {
    setSearch(input);
  }

  const searchSubmitHandler = () => {
    dispatch({
      type: GET_NEWS_SAGA,
      selectedCountry,
      search: search.trim().toLowerCase()
    });
  }

  return(
    <Wrapper>
      <Header
        title='Search Top News'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <ScrollView>
        <Title>{getTitle()}</Title>

        <SearchWrapper>
          <InputSearch
            value={search}
            autoCapitalize='none'
            placeholder='Search term...'
            onChangeText={setSearchInput}
          />
          <ButtonSearch
            activeOpacity={0.75}
            onPress={searchSubmitHandler}
          >
            <Icon
              size={30}
              color={Colors.black}
              name="magnify"
            />
          </ButtonSearch>
        </SearchWrapper>

        {articlesWithSearchTerm && !!articlesWithSearchTerm.length ? (
          <ArticlesWrapper>
            {articlesWithSearchTerm.map((item, i) => (
              <NewsItem
                key={i}
                title={item.title}
                description={item.description}
                urlToImage={item.urlToImage}
                onPress={goToArticlePage(item)}
              />
            ))}
          </ArticlesWrapper>
          ) : articles && !!articles.length && !search.length ? (
            <ArticlesWrapper>
              {articles.map((item, i) => (
                <NewsItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  onPress={goToArticlePage(item)}
                />
              ))}
            </ArticlesWrapper>
          ) : (
          <FallbackText>Nothing found.</FallbackText>
        )}
      </ScrollView>
    </Wrapper>
  )
}
