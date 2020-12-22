import React, { useState, useRef, useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../library/colors';
import ListItem from './ListItem';

const { width: winWidth } = Dimensions.get('window');

const View = styled.View``;
const FlatList = styled.FlatList``;
const ItemWrapper = styled.View`
  width: ${winWidth}px;
  justify-content: center;
  align-items: center;
`;
const LeftButton = styled.TouchableOpacity`
  position: absolute;
  top: 45px;
  left: 30px;
`;
const RightButton = styled.TouchableOpacity`
  position: absolute;
  top: 45px;
  right: 30px;
`;

export default function HorizontalCategory({
  news = [],
  onArticlePress = () => {},
}) {
  let flatList = useRef(null);
  const [ scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    scrollToArticle();
  }, [scrollIndex])

  scrollToArticle = () => {
    flatList && flatList.scrollToIndex({
      index: scrollIndex,
      animated: true,
      viewOffset: 0,
      viewPosition: 1,
    });
  }

  const prevPressHandler = () => {
    if (scrollIndex < 1) return;
    setScrollIndex(scrollIndex - 1);
  }

  const nextPressHandler = () => {
    if (scrollIndex > news.length - 2) return ;
    setScrollIndex(scrollIndex + 1);
  }

  return (
    <View style={{ position: 'relative' }}>
      <FlatList
        ref={ref => flatList = ref}
        horizontal
        initialNumToRender={news.length}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ItemWrapper key={index} >
            <ListItem
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              onPress={onArticlePress(item)}
            />
          </ItemWrapper>
        )}
      />

      <LeftButton
        activeOpacity={0.75}
        onPress={prevPressHandler}
        disabled={scrollIndex === 0}
      >
        <Icon
          size={30}
          name="arrow-left"
          color={scrollIndex === 0 ? Colors.gray : Colors.black}
        />
      </LeftButton>

      <RightButton
        activeOpacity={0.75}
        onPress={nextPressHandler}
        disabled={scrollIndex === news.length}
      >
        <Icon
          size={30}
          name="arrow-right"
          color={scrollIndex === news.length - 1 ? Colors.gray : Colors.black}
        />
      </RightButton>
    </View>
  );
}

