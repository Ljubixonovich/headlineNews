import {
  GET_NEWS,
  GET_NEWS_WITH_SEARCH,
  GET_NEWS_WITH_CATEGORIES,
  SET_COUNTRY,
  TOGGLE_LOADING,
} from '../actions';

const initialState = {
  selectedCountry: 'us',
  loading: false,
  articles: [],
  articlesWithSearchTerm: [],

  articles_business: [],
  articles_entertainment: [],
  articles_general: [],
  articles_health: [],
  articles_science: [],
  articles_sports: [],
  articles_technology: [],
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

    case GET_NEWS_WITH_CATEGORIES:
      return {
        ...state,
        [action.articlesCategory]: action.articles,
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