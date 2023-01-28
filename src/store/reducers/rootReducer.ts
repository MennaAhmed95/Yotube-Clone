import { combineReducers } from "redux";
import { homeVideosReducer, searchedVideosReducer } from "./videos.reducer";

export const rootReducer = combineReducers({
  homeVideos: homeVideosReducer,
  searchedVideos: searchedVideosReducer,

  // channelVideos: channelVideosReducer,
});
