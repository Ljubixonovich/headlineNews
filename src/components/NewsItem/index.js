import React, { memo } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import Colors from '../../library/colors'

const { width: winWidth } = Dimensions.get('window')

const Wrapper = styled.TouchableOpacity`
  margin: 5px;
  padding: 5px;
  width: ${winWidth * 0.455}px;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
`
const Title = styled.Text`
  font-weight: bold;
`
const Image = styled.Image`
  align-self: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 60px;
  height: 60px;
`
const ImagePlaceholder = styled.View`
  align-self: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 60px;
  height: 60px;
`
const Description = styled.Text`
  font-size: 13px;
`

export default memo(function NewsItem({ title = '', description = '', urlToImage = '', onPress = () => {} }) {
  console.log('NewsItem render')
  return (
    <Wrapper onPress={onPress}>
      <Title>{title}</Title>
      {!!urlToImage ? (
        <FastImage
          source={{ uri: urlToImage }}
          style={{
            width: 60,
            height: 60,
            alignSelf: 'center',
            marginVertical: 5,
          }}
        />
      ) : (
        <ImagePlaceholder />
      )}
      <Description>{description}</Description>
    </Wrapper>
  )
})
