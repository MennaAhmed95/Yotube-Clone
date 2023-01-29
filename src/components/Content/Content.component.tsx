import "./Content.styles.css";
import { VideoGrid } from "./VideoGrid/VideoGrid.component";
import { useState } from "react";
import { InfiniteScroll } from "../InfiniteScroll/InfiniteScroll.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../store/actions/videos.action";

export const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state: any) => state.homeVideos
  );
  console.log(videos, activeCategory, loading);

  const grid = <VideoGrid videos={videos} time={true} />;

  const callBack = () => {};
  return (
    <InfiniteScroll callBack={callBack} isLoading={loading}>
      {grid}
    </InfiniteScroll>
  );
};
