import reducer, { initialState } from './reducer';
import * as actionTypes from '../actions';

describe('reducer', () => {
  it('should return default initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  it('should return initial state and change articles', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_NEWS,
      articles: [1, 2, 3, 4]
    })).toEqual({
      ...initialState,
      articles: [1, 2, 3, 4]
    })
  })

  it('should return initial state and change articlesWithSearchTerm', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_NEWS_WITH_SEARCH,
      articlesWithSearchTerm: [1, 2, 3, 4]
    })).toEqual({
      ...initialState,
      articlesWithSearchTerm: [1, 2, 3, 4]
    })
  })

  it('should return initial state and change articles_business', () => {
    expect(reducer(initialState, {
      type: actionTypes.GET_NEWS_WITH_CATEGORIES,
      articles: [1, 2, 3, 4],
      articlesCategory: 'articles_business'
    })).toEqual({
      ...initialState,
      articles_business: [1, 2, 3, 4]
    })
  })

  it('should return initial state and change selectedCountry', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_COUNTRY,
      selectedCountry: 'rs'
    })).toEqual({
      ...initialState,
      selectedCountry: 'rs'
    })
  })

  it('should return initial state and change loading', () => {
    expect(reducer(initialState, {
      type: actionTypes.TOGGLE_LOADING,
      loading: true
    })).toEqual({
      ...initialState,
      loading: true
    })
  })
})