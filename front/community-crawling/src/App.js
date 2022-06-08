import React from "react";
import { Route, Routes } from "react-router-dom";
import MainTemplate from "./components/main/MainTemplate";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate></MainTemplate>}></Route>
      </Routes>
    </>
  );
};

export default App;
