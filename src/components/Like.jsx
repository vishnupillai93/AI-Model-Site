import React, { useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

export default function Like({ className }) {
  const [modelLike, setModelLike] = useState();
  return (
    <button
      onClick={() => {
        // if (modelLike) {
        //   setLikeCount((likeCount) => likeCount - 1);
        // } else {
        //   setLikeCount((likeCount) => likeCount + 1);
        // }
        setModelLike((modelLike) => !modelLike);
      }}
    >
      {modelLike ? (
        <IoMdHeart className={`text-danger ${className}`} />
      ) : (
        <IoIosHeartEmpty className={`text-white ${className}`} />
      )}
    </button>
  );
}
