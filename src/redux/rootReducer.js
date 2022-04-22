import { combineReducers } from "redux";
import earphoneReducer from "./earphones/earphoneReducer";
import headphoneReducer from "./headphones/headphoneReducer";
import speakerReducer from "./speakers/speakerReducer";

const rootReducer = combineReducers({
  headphone: headphoneReducer,
  speaker: speakerReducer,
  earphone: earphoneReducer
})

export default rootReducer