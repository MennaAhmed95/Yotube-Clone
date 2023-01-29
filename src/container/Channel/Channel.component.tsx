import "./Channel.styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannelDetails } from "../../store/actions/channel.action";
import { getVideosByChannel } from "../../store/actions/videos.action";
import { formatShortString } from "../../utils/formatNum";
import { VideoGrid } from "./../../components/Content/VideoGrid/VideoGrid.component";

export const ChannelPage = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  const { videos, loading } = useSelector((state: any) => state.channelVideos);
  const { snippet, statistics } = useSelector(
    (state: any) => state.channelDetails.channel
  );

  return (
    <>
      <div className="channelHeader">
        <div className="channelHeader_container">
          <img
            src={snippet?.thumbnails?.default?.url}
            alt="cover"
            className="cover_channel"
          />
          <div className="channelHeader_details">
            <h3>{snippet?.title}</h3>
            <span>
              {formatShortString(statistics?.subscriberCount)} subscribers
            </span>
          </div>
        </div>
        <button className="subscribeBtn">Subscribe</button>
      </div>
      <VideoGrid videos={videos} time={false} />
    </>
  );
};
