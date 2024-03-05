import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import Dropdown from "../components/Dropdown";

const Explore = () => {
  const modelData = useSelector((state) => state.model.value);
  const options = ["provider", "type", "title"];
  const [selected, setSelected] = useState();

  const sortedData = useMemo(() => {
    return modelData.toSorted((a, b) =>
      a[selected] < b[selected] ? -1 : a[selected] > b[selected] ? 1 : 0
    );
  }, [modelData, selected]);

  return (
    <Container className="flex flex-col flex-1">
      <div className="flex justify-end mx-4">
        <Dropdown
          className="w-20"
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <div className="m-4 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
        {sortedData.map((cardData) => (
          <Link key={cardData.id} to={`/${cardData.id}`} state={cardData}>
            <Card {...cardData} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Explore;
