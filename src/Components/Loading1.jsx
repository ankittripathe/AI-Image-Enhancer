import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin border-4 w-14 h-14 rounded-full scale-150 border-red-300 border-b-transparent"></div>
    </div>
  );
};

export default Loading;
