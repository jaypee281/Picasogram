import React, { useContext, useReducer} from "react";
import ReactDOM from "react-dom";
import AlbumContext from "./context";
import albumReducer from "./reducer";
import  "./components/styles.css"
import ImageList from "./components/ImageList";
import ImageUpload from "./components/ImageUpload";


const App = () => {
  const initialState = useContext(AlbumContext);
  const [state, dispatch] = useReducer(albumReducer, initialState);

  return (
    <AlbumContext.Provider value={{ state, dispatch }}>
      <ImageUpload />
      <ImageList />
    </AlbumContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

