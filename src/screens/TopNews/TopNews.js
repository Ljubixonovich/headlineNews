import React, {useEffect} from 'react';
import {Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import {GET_NEWS_SAGA, SET_COLOR, SET_COUNTRY_SAGA} from '../../store/actions';
import {LetterCodes} from '../../library/letterCodes';
import {Wrapper, ScrollView, Title, ArticlesWrapper} from '../../components/UI';

export default function TopNews(props) {
  // const {selectedCountry, articles} = useSelector((state) => state.test);
  const selectedCountry = useSelector((state) => state.test.selectedCountry);
  const articles = useSelector((state) => state.test.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_NEWS_SAGA, selectedCountry});
  }, [selectedCountry]);

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const changeLanguageHandler = (selectedCountry) => {
    dispatch({type: SET_COUNTRY_SAGA, selectedCountry});
  };

  const changeColorHandler = () => {
    dispatch({type: SET_COLOR});
  };

  const goToArticlePage = (item) => () => {
    props.navigation.navigate('Article', {article: item});
  };

  const getTitle = () => {
    return LetterCodes.find((c) => c.code === selectedCountry).country;
  };

  return (
    <Wrapper>
      <Header
        title="Top News"
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <Title>{getTitle()}</Title>
      <Btn onPress={changeColorHandler} />
      <ArticlesWrapper>
        {articles && !!articles.length && (
          <FlatList
            keyExtractor={(item, index) => item.url.toString()}
            data={articles}
            renderItem={({item, index}) => (
              <NewsItem
                key={item.url}
                title={item.title}
                description={item.description}
                urlToImage={item.urlToImage}
                onPress={goToArticlePage(item)}
              />
            )}
            numColumns={2}
          />
        )}
      </ArticlesWrapper>
    </Wrapper>
  );
}

const Btn = function ({onPress}) {
  const color = useSelector((state) => state.test.color);
  return <Button title="boja" onPress={onPress} color={color} />;
};
