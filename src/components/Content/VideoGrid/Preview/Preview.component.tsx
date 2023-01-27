import "./Preview.styles.css";
import card from "./../../../../assets/images/card.jpg";

export const Preview = () => {
  return (
    <div className="video_preview">
      <div
        className="video_image"
        // onClick={() => props.history.push(`/watch?v=${props.video.id}`)}
      >
        <img src={card} width="220px" height="150px" alt="card" />
        <div className="video_time">
          <span>32:02</span>
        </div>
      </div>
      <div className="infoClass">
        <div className="video_info_title">props.video.snippet?.title</div>
        <div className="video_basic_info">
          <div className="video_channel">videosnippetchannelTitle</div>
          <div className="video_view_time">props.video.statistics</div>
          {/* {props.isVertical && (
            <div className="video_info_title">
              {props.video.snippet?.description}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
