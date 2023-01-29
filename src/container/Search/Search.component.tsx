import { Preview } from "../../components/Content/VideoGrid/Preview/Preview.component";
import { InfiniteScroll } from "./../../components/InfiniteScroll/InfiniteScroll.component";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideosBySearch } from "../../store/actions/videos.action";

export const Search = () => {
  const { query }: any = useParams();
  const dispatch = useDispatch();

  const { videos, loading } = useSelector((state: any) => state.searchedVideos);
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);
  console.log(videos);

  const previews = videos?.map((video: any) => (
    <Preview isVertical video={video} key={video.etag} search />
  ));
  const callBack = () => {};
  return (
    <div>
      <InfiniteScroll callBack={callBack} isLoading={loading}>
        <div className="margin">{previews}</div>
      </InfiniteScroll>
    </div>
  );
};
