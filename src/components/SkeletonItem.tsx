import React from "react";
import { BoxIcon, TrashIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@radix-ui/themes";

export const SkeletonItem = () => {
  return (
    <div className={"w-full mb-2"}>
      <Skeleton>
        <div className="flex flex-col w-full items-start justify-between">
          <p className={`cursor-pointer  "text-black"`}>sadsadas</p>

          <p className={`cursor-pointer line-clamp-1 "text-black"`}>dfdsfsdf</p>
        </div>
      </Skeleton>
      <Skeleton>
        <div className="flex flex-col items-center justify-between">
          <button className="p-1 bg-blue-500/75 text-white rounded hover:bg-blue-600/90 mb-1">
            <BoxIcon />
          </button>
          <button className="p-1 bg-red-500/75 text-white rounded hover:bg-red-600/90">
            <TrashIcon />
          </button>
        </div>
      </Skeleton>
    </div>
  );
};
