import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import Dropdown from "../components/Dropdown";

const Home = () => {
  return (
    <Container className="flex flex-col flex-1 text-white">
      <h1 className="text-6xl text-center font-bold mt-2 mb-4">
        AI Frontier: Innovative Model Showcase
      </h1>
      <div className="flex justify-evenly text-justify my-4 text-wrap text-2xl mx-4">
        <p className="break-all lg:max-w-2xl xs:max-w-max">
          Step into the dynamic universe of our AI Models, embarking on a
          captivating journey through the ever-evolving panorama of artificial
          intelligence and Language Models (LLMs). Immerse yourself in an
          experiential platform that invites exploration into avant-garde models
          meticulously crafted by pioneering minds and forward-thinking
          organizations. Traverse a spectrum of categories ranging from image
          recognition to sentiment analysis, each revealing glimpses into the
          vast potential of AI-driven innovation. Engage with our interactive
          interface, allowing you to selectively explore any model that captures
          your curiosity, unraveling its complete prowess. Embrace the
          technological future as you navigate through our dynamic application,
          a realm where the frontiers of possibility are continually being
          reshaped. Welcome to the forefront of cutting-edge innovation.
        </p>
        <div className="ml-4 lg:flex xs:hidden">
          <img src="/ai.jpg" width={400} height={400} className=" rounded-lg" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
