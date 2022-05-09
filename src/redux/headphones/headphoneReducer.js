// in Reducer always first set the initial state

const initialState = {
  loading: false,
  headphones: [],
  error: ''
}

const headphoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HEADPHONES_REQUEST':
      return {
        ...state,
        loading: true
      }
    
    case 'FETCH_HEADPHONES_SUCCESS':
      return {
        loading: false,
        headphones: action.payload,
        error: ''
      }
    
    case 'FETCH_HEADPHONES_FAILURE':
      return {
        loading: false,
        headphones: [],
        error: action.payload
      }
    default: return state
  }
}

export default headphoneReducer;
