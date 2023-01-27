import "./Title.styles.css";

interface ITitle {
  title: string;
}

const Title = (props: ITitle) => {
  return (
    <div className="video_grid video_grid_title">
      <span className="video_title">{props.title}</span>
    </div>
  );
};

export default Title;
