import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  return (
    <RotatingLines
      visible={true}
      height="70"
      width="70"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      strokeColor="orangered"
    />
  );
};
