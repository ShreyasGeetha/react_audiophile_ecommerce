import { FETCH_HEADPHONES_FAILURE, FETCH_HEADPHONES_REQUEST, FETCH_HEADPHONES_SUCCESS, FETCH_HEADPHONES_CATEGORY_FAILURE, FETCH_HEADPHONES_CATEGORY_REQUEST, FETCH_HEADPHONES_CATEGORY_SUCCESS } from "./headphoneTypes"
import axios from "axios"

export const fetchHeadphonesRequest = () => {
  return {
    type: FETCH_HEADPHONES_REQUEST    
  }
}

export const fetchHeadphonesSuccess = (headphones) => {
  return {
    type: FETCH_HEADPHONES_SUCCESS,
    payload: headphones
  }
}

export const fetchHeadphonesFailure = (error) => {
  return {
    type: FETCH_HEADPHONES_FAILURE,
    payload: error
  }
}

export const fetchHeadphonesCategoryRequest = () => {
  return {
    type: FETCH_HEADPHONES_CATEGORY_REQUEST    
  }
}

export const fetchHeadphonesCategorySuccess = (headphones) => {
  return {
    type: FETCH_HEADPHONES_CATEGORY_SUCCESS,
    payload: headphones
  }
}

export const fetchHeadphonesCategoryFailure = (error) => {
  return {
    type: FETCH_HEADPHONES_CATEGORY_FAILURE,
    payload: error
  }
}


// using thunk it will return another function

export const fetchHeadphoneCategory = () => {
  // we can do async api calls here
  return (dispatch) => {
    dispatch(fetchHeadphonesCategoryRequest())

    axios.get('/data.json')
      .then(response => {
        const category = [...new Set(response.data.map(category => category.category))] 
        console.log("we are printing this", category)
        dispatch(fetchHeadphonesCategorySuccess(category))      
      })
      .catch(error => {
        const errorMsg = error.message        
        dispatch(fetchHeadphonesCategoryFailure(errorMsg)) 
    })
  }
}