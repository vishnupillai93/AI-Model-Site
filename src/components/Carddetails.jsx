import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "./Container";
import Like from "./Like";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

function Radio({ title, checked }) {
  return (
    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
        type="radio"
        name="flexRadioDefault"
        id="radioDefault01"
      />
      <label
        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
        htmlFor="radioDefault01"
      >
        {title}
      </label>
    </div>
  );
}

function RadioGroup() {
  const [checked, setChecked] = useState("Highly accurate");
  const options = ["Easy to use", "Highly accurate", "Low latency"];
  return (
    <div>
      {options.map((item) => (
        <Radio title={item} />
      ))}
    </div>
  );
}

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [modelLike, setModelLike] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          if (!modelLike) {
            setShowModal(true);
          } else {
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
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
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                    onClick={() => {
                      setShowModal(false);
                      setModelLike((modelLike) => !modelLike);
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

const Carddetails = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const { title, provider, description, loves, code, uses } = state;

  return (
    <Container className="text-white px-4">
      <div className="flex">
        <h1 className="text-6xl font-bold mt-2 mb-4">{title}</h1>
        <Modal />
      </div>
      <h2 className="text-2xl"> Author: {provider}</h2>
      <div className="flex lg:flex-row xs:flex-col items-center">
        <div className="text-justify my-4 max-w-4xl text-2xl">
          {description}
          <p className="mt-2">Uses: {uses}</p>
        </div>
        <div className="relative lg:max-w-2xl xs:max-w-full mx-auto lg:mt-0 xs:mt-10">
          <div className="bg-secondary text-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-bold text-2xl">Code:</span>
              <button
                className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
                data-clipboard-target="#code"
              >
                Copy
              </button>
            </div>
            <div className="overflow-x-auto">
              <pre id="code" className="text-gray-300">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <RadioGroup />
    </Container>
  );
};

export default Carddetails;
