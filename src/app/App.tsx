import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddPlayList, PlayList, Previe } from "../pages";
import "./global.scss";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Previe />} />
          <Route path={"/add"} element={<AddPlayList />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
