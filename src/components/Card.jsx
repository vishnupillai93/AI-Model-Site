import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const Card = ({
  title,
  provider,
  description,
  loves,
  loved,
  reason,
}) => {
  const [likeCount, setLikeCount] = React.useState(Number(loves));
  const [modelLike, setModelLike] = React.useState(loved);
  return (
    <div className="bg-secondary p-2 rounded-lg text-white cursor-pointer">
      <h1 className="text-3xl text-white font-bold">{title}</h1>
      <div className="flex justify-between my-2">
        <div>
          <h3>{provider}</h3>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <div className="text-yellow">
              <h3>{reason}</h3>
            </div>
            <button
              onClick={() => {
                if (modelLike) {
                  setLikeCount((likeCount) => likeCount - 1);
                } else {
                  setLikeCount((likeCount) => likeCount + 1);
                }
                setModelLike((modelLike) => !modelLike);
              }}
            >
              {modelLike ? (
                <IoMdHeart className="text-danger" />
              ) : (
                <IoIosHeartEmpty className="text-white" />
              )}
            </button>
            <div>{likeCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
