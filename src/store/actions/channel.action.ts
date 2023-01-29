import httpRequest from "../api";
import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
} from "../actionTypes";

export const getChannelDetails =
  (id: string | undefined) => async (dispatch: any) => {
    try {
      dispatch({
        type: CHANNEL_DETAILS_REQUEST,
      });

      const { data } = await httpRequest("/channels", {
        params: {
          part: "snippet,statistics,contentDetails",
          id,
        },
      });
      dispatch({
        type: CHANNEL_DETAILS_SUCCESS,
        payload: data.items[0],
      });
    } catch (error: any) {
      console.log(error.response.data);
      dispatch({
        type: CHANNEL_DETAILS_FAIL,
        payload: error.response.data,
      });
    }
  };
