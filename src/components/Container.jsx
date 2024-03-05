import React from "react";
import Header from "./Header";

export default function Container({ children, className }) {
  return (
    <div className={`bg-black flex-1 min-h-screen ${className}`}>
      <Header />
      {children}
    </div>
  );
}
