import React, { useCallback, useEffect, useMemo, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Card from "./Card";

function Featured({ modelData }) {
  const sortedData = useMemo(
    () => (modelData ? modelData.toSorted((a, b) => b.loves - a.loves) : []),
    [modelData]
  );
  return (
    <Container className="flex flex-col flex-1">
      <div className="m-4 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
        {sortedData.map((cardData) => (
          <Link key={cardData.id} to={`/${cardData.id}`} state={cardData}>
            <Card {...cardData} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Featured;
