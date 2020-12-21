import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_NEWS_SAGA, GET_NEWS, SET_COUNTRY_SAGA, SET_COUNTRY } from '../actions';
import API from '../../library/api';


function* getNews(action) {
  try {
    const selectedCountry = action.selectedCountry || 'us';
    const selectedCategory = action.selectedCategory || '';
    const pageSize = action.pageSize || 0;
    let articles = yield call(API.getTopNews, selectedCountry, selectedCategory, pageSize);
    yield put({ type: GET_NEWS, articles: articles });

  } catch (error) {
     console.log(error);
  }
}

function* setCountry(action) {
  try {
    yield put({ type: SET_COUNTRY, selectedCountry: action.selectedCountry });

  } catch (error) {
     console.log(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_NEWS_SAGA, getNews);
  yield takeLatest(SET_COUNTRY_SAGA, setCountry);
}