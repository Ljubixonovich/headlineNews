const initialState = {
  selectedCountry: 'gb',
  loading: false,
};

export default function reducer (state = initialState, action) {
  switch (action.type) {

    case '':
      return {
        ...state,
      }


    default:
      return state;
  }
}