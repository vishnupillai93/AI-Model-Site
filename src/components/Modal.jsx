import React, { useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import RadioGroup from "./RadioGroup";
import { useDispatch } from "react-redux";
import { changelikes } from "../utils/modelSlice";
import axios from "axios";

function Modal({ details }) {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(null);

  const { loves, loved } = details || {};

  const [modelLike, setModelLike] = useState(loved);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          onClick={async () => {
            if (!modelLike) {
              setShowModal(true);
            } else {
              dispatch(
                changelikes({
                  ...details,
                  loves: Number(loves) - 1,
                  loved: false,
                  reason: undefined,
                })
              );
              await axios.put(`/${details.id}`, {
                ...details,
                loves: Number(loves) - 1,
                loved: false,
              });
              setModelLike((modelLike) => !modelLike);
            }
          }}
        >
          {modelLike ? (
            <IoMdHeart className={`text-danger w-20 h-20 ml-4`} />
          ) : (
            <IoIosHeartEmpty className={`text-white w-20 h-20 ml-4`} />
          )}
        </button>
        <h3>{loves} Likes</h3>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray">
                {/*header*/}
                <div className="bg-grayDark flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Why do you like this model ?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="bg-grayDark relative p-6 flex-auto">
                  <RadioGroup checked={checked} setChecked={setChecked} />
                </div>
                {/*footer*/}
                <div className="bg-grayDark flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-danger"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-success"
                    type="button"
                    onClick={async () => {
                      if (checked == null) return;
                      setShowModal(false);
                      setModelLike((modelLike) => !modelLike);
                      dispatch(
                        changelikes({
                          ...details,
                          loves: Number(loves) + 1,
                          loved: true,
                          reason: checked,
                        })
                      );
                      await axios.put(`/${details.id}`, {
                        ...details,
                        loves: Number(loves) + 1,
                        loved: true,
                      });
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
