import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  CHANNEL_VIDEOS_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
} from "./../actionTypes";

import httpRequest from "../api";

export const getPopularVideos = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await httpRequest("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error: any) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosBySearch =
  (keyword: string | undefined) => async (dispatch: any) => {
    try {
      dispatch({
        type: SEARCH_VIDEO_REQUEST,
      });
      const { data } = await httpRequest("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: keyword,
          type: "video,channel",
        },
      });

      dispatch({
        type: SEARCH_VIDEO_SUCCESS,
        payload: data.items,
      });
    } catch (error: any) {
      console.log(error.message);
      dispatch({
        type: SEARCH_VIDEO_FAIL,
        payload: error.message,
      });
    }
  };

export const getVideoById =
  (id: string | undefined) => async (dispatch: any) => {
    try {
      dispatch({
        type: SELECTED_VIDEO_REQUEST,
      });

      const { data } = await httpRequest("/videos", {
        params: {
          part: "snippet,statistics",
          id: id,
        },
      });
      dispatch({
        type: SELECTED_VIDEO_SUCCESS,
        payload: data.items[0],
      });
    } catch (error: any) {
      console.log(error.message);
      dispatch({
        type: SELECTED_VIDEO_FAIL,
        payload: error.message,
      });
    }
  };

export const getVideosByChannel =
  (id: string | undefined) => async (dispatch: any) => {
    try {
      dispatch({
        type: CHANNEL_VIDEOS_REQUEST,
      });

      // 1. get upload playlist id
      const {
        data: { items },
      } = await httpRequest("/channels", {
        params: {
          part: "contentDetails",
          id: id,
        },
      });
      const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;
      // 2. get the videos using the id
      const { data } = await httpRequest("/playlistItems", {
        params: {
          part: "snippet,contentDetails",
          playlistId: uploadPlaylistId,
          maxResults: 20,
        },
      });

      dispatch({
        type: CHANNEL_VIDEOS_SUCCESS,
        payload: data.items,
      });
    } catch (error: any) {
      console.log(error.response.data.message);
      dispatch({
        type: CHANNEL_VIDEOS_FAIL,
        payload: error.response.data,
      });
    }
  };
