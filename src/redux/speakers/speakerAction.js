import axios from "axios"
import { FETCH_SPEAKER_FAILURE, FETCH_SPEAKER_REQUEST, FETCH_SPEAKER_SUCCESS } from "./speakerTypes"

export const fetchSpeakersRequest = () => {
  return {
    type: FETCH_SPEAKER_REQUEST    
  }
}

export const fetchSpeakersSuccess = (speakers) => {
  return {
    type: FETCH_SPEAKER_SUCCESS,
    payload: speakers
  }
}

export const fetchSpeakersFailure = (error) => {
  return {
    type: FETCH_SPEAKER_FAILURE,
    payload: error
  }
}

// using thunk it will return another function
export const fetchSpeakers = () => {
  // we can do async api calls here
  return (dispatch) => {
    dispatch(fetchSpeakersRequest())
    axios.get('/data.json')
      .then(response => {
        const speakers = response.data
        // console.log(users)
        dispatch(fetchSpeakersSuccess(speakers))      
      })
      .catch(error => {
        const errorMsg = error.message        
        dispatch(fetchSpeakersFailure(errorMsg)) 
    })
  }
}