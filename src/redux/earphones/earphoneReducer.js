// in Reducer always first set the initial state

const initialState = {
  loading: false,
  earphones: [],
  error: ''
}

const earphoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EARPHONE_REQUEST':
      return {
        ...state,
        loading: true
      }
    
    case 'FETCH_EARPHONE_SUCCESS':
      return {
        loading: false,
        earphones: action.payload,
        error: ''
      }
    
    case 'FETCH_EARPHONE_FAILURE':
      return {
        loading: false,
        earphones: [],
        error: action.payload
      }
    default: return state
  }
}

export default earphoneReducer