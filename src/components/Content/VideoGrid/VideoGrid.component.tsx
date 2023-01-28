import { Preview } from "./Preview/Preview.component";
import Title from "./Title/Title.component";
import "./VideoGrid.styles.css";

export const VideoGrid = ({ videos, title }: any) => {
  let preview = videos?.map((video: any) => (
    <Preview key={video.id} video={video} />
  ));
  return (
    <>
      <Title title={title} />
      <div className="video_grid">{preview}</div>
      <hr />
    </>
  );
};
