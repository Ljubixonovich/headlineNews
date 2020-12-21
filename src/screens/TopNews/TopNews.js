import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { GET_NEWS_SAGA, SET_COUNTRY_SAGA } from '../../store/actions';

export default function TopNews (props) {
  const { selectedCountry, articles } = useSelector(state => state.test);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_NEWS_SAGA, selectedCountry, pageSize: 0 });
  }, [])

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }

  const changeLanguageHandler = (input) => {
    dispatch({ type: SET_COUNTRY_SAGA, selectedCountry: input })
  }

  return(
    <View style={{position: 'relative', flex: 1}}>
      <Header
        title='Top News'
        onMenuPress={toggleDrawer}
        changeLanguage={changeLanguageHandler}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TopNews Screen</Text>
        <Text>Articles length: {articles.length}</Text>
        <Button
          title='Article'
          onPress={() => {props.navigation.push('Article')}}
        />
      </View>
    </View>
  )
}
