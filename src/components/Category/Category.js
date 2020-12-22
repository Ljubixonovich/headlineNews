import React, { useState } from 'react';
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
`;
const TouchableOpacity = styled.TouchableOpacity``;
const CategoryTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-right: 20px;
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
  title = '',
  articles = [],
  noTopMargin = false,
  onArticlePress = () => {},
}) {
  const [horizontalList, setHorizontalList] = useState(true);

  const toggleExpandListHandler = () => {
    setHorizontalList(!horizontalList);
  }

  const reduceList = (list) => {
    return list.length >= 5 ? list.slice(0, 5) : list;
  }

  return (
    <>
      <List noTopMargin={noTopMargin}>

        <TitleWrapper>
          <CategoryTitle>{title}</CategoryTitle>
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
            {articles && !!articles.length && articles.map((item, i) => (
              <NewsItem
                key={i}
                title={item.title}
                description={item.description}
                urlToImage={item.urlToImage}
                onPress={onArticlePress(item)}
              />
            ))}
          </ArticlesWrapper>
        ))}
      </List>

      <Line />
    </>
  )
}