import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoById } from "../../store/actions/videos.action";

export const WatchPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video } = useSelector((state: any) => state.selectedVideo);

  return (
    <>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={video?.snippet?.title}
          allowFullScreen
          width="100%"
          height="500px"
        ></iframe>
      </div>
    </>
  );
};
