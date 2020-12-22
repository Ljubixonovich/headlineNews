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
        articles_business: action.category === 'articles_business' ? action.articles_business : state.articles_business,
        articles_entertainment: action.category === 'articles_entertainment' ? action.articles_entertainment : state.articles_entertainment,
        articles_general: action.category === 'articles_general' ? action.articles_general : state.articles_general,
        articles_health: action.category === 'articles_health' ? action.articles_health : state.articles_health,
        articles_science: action.category === 'articles_science' ? action.articles_science : state.articles_science,
        articles_sports: action.category === 'articles_sports' ? action.articles_sports : state.articles_sports,
        articles_technology: action.category === 'articles_technology' ? action.articles_technology : state.articles_technology,
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