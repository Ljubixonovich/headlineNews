import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_NEWS_SAGA, GET_NEWS, GET_NEWS_WITH_SEARCH, SET_COUNTRY_SAGA, SET_COUNTRY, TOGGLE_LOADING } from '../actions';
import API from '../../library/api';


function* getNews(action) {
  try {
    yield put ({ type: TOGGLE_LOADING, loading: true });
    const selectedCountry = action.selectedCountry || 'us';
    const selectedCategory = action.selectedCategory || '';
    const pageSize = action.pageSize || 0;
    const search = action.search || '';
    if (!search.length) {
      yield put ({ type: GET_NEWS_WITH_SEARCH, articlesWithSearchTerm: [] });
    } 
    let articles = yield call(API.getTopNews, {selectedCountry, selectedCategory, pageSize, search});
    if (!!search) {
      yield put({ type: GET_NEWS_WITH_SEARCH, articlesWithSearchTerm: articles });
    } else {
      yield put({ type: GET_NEWS, articles: articles });
    }
    yield put ({ type: TOGGLE_LOADING, loading: false });
  } catch (error) {
     console.log('getNews saga ', error);
     yield put ({ type: TOGGLE_LOADING, loading: false });
  }
}

function* setCountry(action) {
  try {
    yield put({ type: SET_COUNTRY, selectedCountry: action.selectedCountry });
  } catch (error) {
     console.log('setCountry saga ', error);
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_NEWS_SAGA, getNews);
  yield takeLatest(SET_COUNTRY_SAGA, setCountry);
}