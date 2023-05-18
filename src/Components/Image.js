import React from "react";
import IMAGES from "../players-images";

const Image = () => {
  return (
    <>
      {IMAGES.map((img) => {
        <img src={img} key={img} />;
      })}
    </>
  );
};

export default Image;
