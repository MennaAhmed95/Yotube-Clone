import "./Preview.styles.css";
import { useNavigate } from "react-router-dom";

import { formatShortString } from "./../../../../utils/formatNum";
import { formatTime } from "./../../../../utils/formatTime";
import { timeSince } from "../../../../utils/timeSince";

export const Preview = ({ video, isVertical }: any) => {
  const navigate = useNavigate();
  return (
    <div className="video_preview">
      <div
        className="video_image"
        onClick={() => navigate(`/watch?v=${video.id}`)}
      >
        <img
          style={{ borderRadius: "6px" }}
          src={video.snippet?.thumbnails?.medium?.url}
          width="220px"
          height="150px"
          alt="card"
        />
        <div className="video_time">
          <span>
            {!video.contentDetails
              ? null
              : formatTime(video.contentDetails?.duration!)}
          </span>
        </div>
      </div>
      <div className="infoClass">
        <div className="video_info_title">{video.snippet?.title}</div>
        <div className="video_basic_info">
          <div className="video_channel">{video.snippet.channelTitle}</div>
          <div className="video_view_time">
            {!video.statistics
              ? null
              : `${formatShortString(
                  video.statistics?.viewCount!
                )} views • ${timeSince(new Date(video.snippet?.publishedAt!))}`}
          </div>
          {isVertical && (
            <div className="video_info_title">{video.snippet?.description}</div>
          )}
        </div>
      </div>
    </div>
  );
};
