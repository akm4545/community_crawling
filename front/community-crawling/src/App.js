import React from "react";
import { BrowserRouter as Router, Route, Routes} from "../node_modules/react-router-dom/index";
import MainTemplate from "./components/main/MainTemplate";
import DetailMainTemplate from "./components/detail/DetailMainTemplate";
import ListTemplate from "./components/list/ListTemplate";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainTemplate></MainTemplate>}></Route>
          <Route path="/detail/:idx" element={<DetailMainTemplate></DetailMainTemplate>}></Route>
          <Route path="/list" element={<ListTemplate></ListTemplate>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;