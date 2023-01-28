import { Waypoint } from "react-waypoint";
import { Spinner } from "./../Spinner/Spinner.component";

interface IInfiniteScroll {
  children: React.ReactElement;
  callBack(args: Waypoint.CallbackArgs): void;
  isLoading: boolean;
}
export const InfiniteScroll = (props: IInfiniteScroll) => {
  return (
    <>
      {props.children}
      <Waypoint bottomOffset="-15px" onEnter={props.callBack}>
        <div className="pos-center">{props.isLoading ? <Spinner /> : ""}</div>
      </Waypoint>
    </>
  );
};
