import { combineReducers } from "redux";
import { channelDetailsReducer } from "./channel.reducer";
import {
  channelVideosReducer,
  homeVideosReducer,
  searchedVideosReducer,
  selectedVideoReducer,
} from "./videos.reducer";

export const rootReducer = combineReducers({
  homeVideos: homeVideosReducer,
  searchedVideos: searchedVideosReducer,
  channelVideos: channelVideosReducer,
  channelDetails: channelDetailsReducer,
  selectedVideo: selectedVideoReducer,
});
