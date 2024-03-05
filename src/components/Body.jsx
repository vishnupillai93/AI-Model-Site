import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Container from "./Container";

const Body = ({ modelData }) => {
  return (
    <Container className="flex flex-col flex-1">
      <div className="m-4 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
        {modelData.map((cardData) => (
          <Link key={cardData.id} to={`/${cardData.id}`} state={cardData}>
            <Card {...cardData} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Body;
