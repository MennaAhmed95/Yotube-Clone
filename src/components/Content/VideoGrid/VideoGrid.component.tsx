import { Preview } from "./Preview/Preview.component";
import Title from "./Title/Title.component";
import "./VideoGrid.styles.css";

export const VideoGrid = () => {
  let x = Array.apply(null, new Array(15)).map((_, i) => <Preview key={i} />);
  return (
    <>
      <Title title="Test Title" />
      <div className="video_grid">{x}</div>
      <hr />
    </>
  );
};
