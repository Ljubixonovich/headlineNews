import { GET_NEWS, GET_NEWS_WITH_SEARCH, SET_COUNTRY, TOGGLE_LOADING } from '../actions';

const initialState = {
  selectedCountry: 'us',
  loading: false,
  articles: [],
  articlesWithSearchTerm: [],
};

export default function reducer (state = initialState, action) {
  switch (action.type) {

    case GET_NEWS:
      return {
        ...state,
        articles: action.articles,
      }

    case GET_NEWS_WITH_SEARCH:
      return {
        ...state,
        articlesWithSearchTerm: action.articlesWithSearchTerm,
      }

    case SET_COUNTRY:
      return {
        ...state,
        selectedCountry: action.selectedCountry,
      }

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.loading,
      }

    default:
      return state;
  }
}