import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalCategory from './HorizontalCategory';
import { ArticlesWrapper } from '../../components/UI';
import NewsItem from '../../components/NewsItem';
import Colors from '../../library/colors';

const List = styled.View`
  flex: 1;
  margin-top: ${({noTopMargin}) => (noTopMargin ? '0' : '10')}px;
  margin-bottom: 10px;
  background-color: ${Colors.lightGray};
`;
const TitleWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 25px;
`;
const TouchableOpacity = styled.TouchableOpacity``;
const CategoryTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const View = styled.View``;
const Line = styled.View`
  height: 1px;
  width: 350px;
  background-color: ${Colors.black};
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
`;

export default function Category({
  name = '',
  articles = [],
  noTopMargin = false,
  selectedCountry = 'us',
  onArticlePress = () => {},
}) {
  const [horizontalList, setHorizontalList] = useState(true);

  const toggleExpandListHandler = () => {
    setHorizontalList(!horizontalList);
  }

  const reduceList = (list) => {
    return list.length >= 5 ? list.slice(0, 5) : list;
  }

  const getTitle = () => {
    let text = horizontalList ? 
      `Top 5 ${name} news from ${selectedCountry.toUpperCase()}` :
      `Top ${name} news from ${selectedCountry.toUpperCase()}`;
    return text;
  }

  const renderNewsItem = ({ item, index }) => {    
    return (
      <NewsItem
        key={item.url}
        title={item.title}
        description={item.description}
        urlToImage={item.urlToImage}
        onPress={onArticlePress(item)}
      />
    );
  }

  return (
    
    <View style={{flex: 1}}>
      <List noTopMargin={noTopMargin}>

        <TitleWrapper>
          <CategoryTitle>{getTitle()}</CategoryTitle>
          {!!articles.length && (
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
          )}
        </TitleWrapper>

        {!articles.length ? (<View />) : (horizontalList ? (
          <HorizontalCategory
            news={reduceList(articles)}
            onArticlePress={onArticlePress}
          />
          ) : (
          <ArticlesWrapper>
            {articles && !!articles.length && <FlatList
              keyExtractor={(item, index) => item.url.toString()}
              data={articles}
              renderItem={renderNewsItem}
              numColumns={2}
            />}
          </ArticlesWrapper>
        ))}
      </List>

      <Line />
    </View>
  )
}