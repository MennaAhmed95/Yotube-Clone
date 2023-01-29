import { Preview } from "./Preview/Preview.component";

import "./VideoGrid.styles.css";

export const VideoGrid = ({ videos, isVertical, time }: any) => {
  let preview = videos?.map((video: any) => (
    <Preview key={video.id} video={video} time={time} />
  ));
  return (
    <>
      <div className={isVertical ? "" : "video_grid"}>{preview}</div>
    </>
  );
};
