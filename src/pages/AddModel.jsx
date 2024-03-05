import React, { useRef } from "react";
import Container from "../components/Container";
import { useDispatch } from "react-redux";
import { addmodel } from "../utils/modelSlice";
import { useNavigate } from "react-router-dom";

export default function AddModel() {
  const title = useRef("");
  const provider = useRef("");
  const description = useRef("");
  const code = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      title.current === "" ||
      provider.current === "" ||
      description.current === "" ||
      code.current === ""
    )
      return;
    dispatch(
      addmodel({
        id: Date.now(),
        title: title.current,
        provider: provider.current,
        description: description.current,
        code: code.current,
        loves: 0,
      })
    );
    navigate("/");
  }

  return (
    <Container className=" text-white">
      <div className="w-full">
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-6xl font-bold leading-7 text-center text-white">
              Upload New Model
            </p>
            <form action="" method="post">
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none text-gray-300">
                    Model Name
                  </label>
                  <input
                    type="text"
                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded bg-grayDark"
                    onChange={(e) => {
                      title.current = e.target.value;
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none text-gray-300">
                    Provider / Author
                  </label>
                  <input
                    type="text"
                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded bg-grayDark"
                    onChange={(e) => {
                      provider.current = e.target.value;
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none text-gray-300">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded bg-grayDark"
                    onChange={(e) => {
                      description.current = e.target.value;
                    }}
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none text-gray-300">
                    Code
                  </label>
                  <textarea
                    type="text"
                    className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded bg-grayDark"
                    onChange={(e) => {
                      code.current = e.target.value;
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-success rounded hover:bg-success-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                  onClick={handleSubmit}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
