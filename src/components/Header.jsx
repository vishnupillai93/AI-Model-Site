import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <ul className="flex p-4 md:gap-x-10 justify-end text-white md:text-2xl xs:text-lg xs:gap-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/featured">Most Liked</Link>{" "}
        </li>
        <li>
          <Link to="/add-model">Add Model</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
