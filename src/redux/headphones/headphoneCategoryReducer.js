const categoryInitialState = {
  loading: false,
  category: [],
  error: ''
}

const headphoneCategoryReducer = (state = categoryInitialState, action) => {
  switch (action.type) {
    case 'FETCH_HEADPHONES_CATEGORY_REQUEST':
      return {
        ...state,
        loading: true
      }
    
    case 'FETCH_HEADPHONES_CATEGORY_SUCCESS':
      return {
        loading: false,
        category: action.payload,
        error: ''
      }
    
    case 'FETCH_HEADPHONES_CATEGORY_FAILURE':
      return {
        loading: false,
        category: [],
        error: action.payload
      }
    default: return state
  }
}

export default headphoneCategoryReducer;
