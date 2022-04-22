import axios from "axios"
import { FETCH_EARPHONE_FAILURE, FETCH_EARPHONE_REQUEST, FETCH_EARPHONE_SUCCESS } from "./earphoneTypes"

export const fetchEarphonesRequest = () => {
  return {
    type: FETCH_EARPHONE_REQUEST    
  }
}

export const fetchEarphonesSuccess = (earphones) => {
  return {
    type: FETCH_EARPHONE_SUCCESS,
    payload: earphones
  }
}

export const fetchEarphonesFailure = (error) => {
  return {
    type: FETCH_EARPHONE_FAILURE,
    payload: error
  }
}

// using thunk it will return another function
export const fetchEarphones = () => {
  // we can do async api calls here
  return (dispatch) => {
    dispatch(fetchEarphonesRequest())
    axios.get('/data.json')
      .then(response => {
        const earphones = response.data
        // console.log(users)
        dispatch(fetchEarphonesSuccess(earphones))      
      })
      .catch(error => {
        const errorMsg = error.message        
        dispatch(fetchEarphonesFailure(errorMsg)) 
    })
  }
}