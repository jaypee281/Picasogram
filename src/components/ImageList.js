import React, { useContext } from "react";
import ImagesContext from "../context";

export default function ImageList() {
  const { state, dispatch } = useContext(ImagesContext);
  const title =
    state.images.length > 0 ? `${state.images.length} Images` : "No Images In Album!";

  return (
    <div className="container">
      <h1 className="text-bold">{title}</h1>
      <ul className="photoList" >
        {state.images.map(i => (
          <li
            key={i.id}
            className=""
          > 
          <div>
            <span
              onDoubleClick={ () => {

                dispatch({ type: "LIKE_IMAGE", payload: i });
              }}
              
            >
             <img class="photo" src={i.image}></img>

            </span>
            </div>
            <div className="image-buttons">
            <img className="like-button" alt={i.like?"Liked":"Not Liked"} src=""></img>
            <button className="delete-button"
              onClick={() =>
                dispatch({ type: "SET_CURRENT_IMAGE", payload: i })
              }
            >
              Change Image
            </button>
            <button className="delete-button"
              onClick={ () => {

                dispatch({ type: "REMOVE_IMAGE", payload: i });
              }}
            >
              Delete Image
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}