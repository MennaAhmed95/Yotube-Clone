import "./Preview.styles.css";
import { useNavigate } from "react-router-dom";

import { formatShortString } from "./../../../../utils/formatNum";
import { formatTime } from "./../../../../utils/formatTime";
import { timeSince } from "../../../../utils/timeSince";
import { useEffect, useState } from "react";
import httpRequest from "../../../../store/api";

export const Preview = ({ video, isVertical, search }: any) => {
  const infoClass: string = isVertical ? "verticalList" : "video_info";
  const navigate = useNavigate();
  /*for channels */
  const {
    id,
    snippet: { channelId, thumbnails, resourceId, publishedAt },
  } = video;
  const isVideo = !(id.kind === "youtube#channel");
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");
  const [channelIcon, setChannelIcon] = useState("");
  const _channelId = resourceId?.channelId || channelId;
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await httpRequest("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) get_video_details();
  }, [id, isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await httpRequest("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default.url);
    };
    get_channel_icon();
  }, [channelId]);

  const handleClick = () => {
    if (search) {
      isVideo
        ? navigate(`/watch/${id.videoId}`)
        : navigate(`/channel/${_channelId}`);
    } else navigate(`/watch?v=${video.id}`);
  };
  return (
    <div className="video_preview">
      <div className="video_image" onClick={handleClick}>
        <img
          style={
            isVideo
              ? { borderRadius: "6px", width: "220px", height: "150px" }
              : { borderRadius: "50%", width: "150px", height: "150px" }
          }
          src={video.snippet?.thumbnails?.medium?.url ?? thumbnails.medium.url}
          alt="card"
        />
        {isVideo && (
          <div className="video_time">
            <span>
              {!video.contentDetails
                ? formatTime(duration)
                : formatTime(video.contentDetails?.duration!)}
            </span>
          </div>
        )}
      </div>

      <div className={infoClass}>
        <div style={{ display: "flex" }}>
          {isVideo && (
            <div>
              <img
                src={channelIcon}
                alt={"icon"}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  verticalAlign: "middle",
                }}
              />
            </div>
          )}
          <div>
            <div className="video_info_title">
              {isVideo && (
                <span style={{ margin: "0.5rem" }}>{video.snippet?.title}</span>
              )}
            </div>
            <div className="video_basic_info">
              <div className="video_channel">{video.snippet.channelTitle}</div>
              <div className="video_view_time">
                {!video.statistics
                  ? null
                  : `${formatShortString(
                      video.statistics?.viewCount!
                    )} views • ${timeSince(
                      new Date(video.snippet?.publishedAt!)
                    )}`}
                {search && isVideo
                  ? `${formatShortString(views)} views • ${timeSince(
                      new Date(publishedAt!)
                    )}`
                  : null}
              </div>
              {isVertical && (
                <div className="video_info_title">
                  {video.snippet?.description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
