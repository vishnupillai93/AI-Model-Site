import { useLocation, useParams } from "react-router-dom";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const modelData = useSelector((state) => state.model.value);
  const details = modelData.filter((item) => Number(item.id) === Number(id))[0];

  // console.log(modelData.filter((item) => item.id === id));
  // for(let i = 0; i < modelData.length; i++) {

  // }

  // const [details, setDetails] = useState({});
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   (async () => {
  //     const response = await axios.get(`/${id}`);
  //     setDetails(response.data);
  //     setLoading(false);
  //   })();
  // }, []);

  // if (loading) {
  //   return (
  //     <Container className="text-white">
  //       <h3 className="text-4xl text-center">Loading...</h3>
  //     </Container>
  //   );
  // }

  return (
    <Container className="text-white px-4">
      <div className="flex">
        <h1 className="text-6xl font-bold mt-2 mb-4">{details?.title}</h1>
        <Modal details={details} />
      </div>
      <h2 className="text-2xl"> Author: {details?.provider}</h2>
      <div className="flex max-w-full flex-col items-center">
        <div className="text-justify my-4 text-wrap text-2xl mr-6">
          <p className="break-all">{details?.description}</p>
          <p className="mt-2">{details?.uses}</p>
        </div>
        <div className="relative max-w-full mx-auto mt-10">
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
                <code>{details?.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
