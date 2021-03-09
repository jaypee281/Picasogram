import React, { useState, useEffect, useContext } from "react";
import ImagesContext from "../context";

export default function ImageUpload() {
  const [image, setImage] = useState("");
  const {
    state: { currentImage = {} },
    dispatch
  } = useContext(ImagesContext);

  useEffect(
    () => {
      if (currentImage.image) {
        setImage(currentImage.image);
      } else {
        setImage("");
      }
    },
    [currentImage.id]
  );

  const handleSubmit =  event => {
    event.preventDefault();
    if (currentImage.image) {
  
      dispatch({ type: "UPDATE_IMAGE", payload: image });
    } else {
      dispatch({ type: "ADD_IMAGE", payload: image });
    }
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="imageUpload">
      <input
        type="text"
        placeholder="Add or Change Image Here"
        className=""
        onChange={event => setImage(event.target.value)}
        value={image}
      />
    </form>
  );
}
