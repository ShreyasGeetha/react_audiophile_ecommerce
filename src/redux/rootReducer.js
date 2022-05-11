import { combineReducers } from "redux";
import earphoneReducer from "./earphones/earphoneReducer";
import headphoneCategoryReducer from "./headphones/headphoneCategoryReducer";
import headphoneReducer from "./headphones/headphoneReducer";
import productReducer from "./product/productReducer";
import speakerReducer from "./speakers/speakerReducer";

const rootReducer = combineReducers({
  product: productReducer,
  headphone: headphoneReducer,
  headphoneCategory: headphoneCategoryReducer,
  speaker: speakerReducer,
  earphone: earphoneReducer
})

export default rootReducer