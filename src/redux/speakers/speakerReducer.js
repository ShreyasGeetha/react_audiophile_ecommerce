// in Reducer always first set the initial state

const initialState = {
  loading: false,
  speakers: [],
  error: ''
}

const speakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SPEAKER_REQUEST':
      return {
        ...state,
        loading: true
      }
    
    case 'FETCH_SPEAKER_SUCCESS':
      return {
        loading: false,
        speakers: action.payload,
        error: ''
      }
    
    case 'FETCH_SPEAKER_FAILURE':
      return {
        loading: false,
        speakers: [],
        error: action.payload
      }
    default: return state
  }
}

export default speakerReducer