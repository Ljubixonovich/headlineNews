import { GET_NEWS, SET_COUNTRY } from '../actions';

const initialState = {
  selectedCountry: 'us',
  loading: false,
  articles: [],
};

export default function reducer (state = initialState, action) {
  switch (action.type) {

    case GET_NEWS:
      return {
        ...state,
        articles: action.articles,
      }

    case SET_COUNTRY:
      return {
        ...state,
        selectedCountry: action.selectedCountry,
      }

    default:
      return state;
  }
}