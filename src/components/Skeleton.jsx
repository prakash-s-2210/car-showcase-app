import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Skeletons = () => {
  return (
    <div className="bg-white shadow-xl min-h-max rounded-xl p-4 py-2  opacity-70 animate-[skeleton_1s_infinite]">
      <div style={{ display: "flex", gap: "20px", justifyContent: "normal" }}>
        <Skeleton containerClassName="flex-1" />
        <Skeleton containerClassName="flex-1" />
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "normal" }}>
        <Skeleton containerClassName="flex-1" />
      </div>
      <Skeleton height={188} />
      <div style={{ display: "flex", justifyContent:"space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Skeleton containerClassName="flex-1" width={40} count={2} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Skeleton containerClassName="flex-1" width={40} count={2} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Skeleton containerClassName="flex-1" width={40} count={2} />
        </div>
      </div>
    </div>
  );
};

export default Skeletons;
