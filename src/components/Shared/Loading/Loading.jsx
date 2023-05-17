import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-l-2 border-accent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
