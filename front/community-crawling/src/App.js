import React from "react";
import { BrowserRouter as Router, Route, Routes} from "../node_modules/react-router-dom/index";
import MainTemplate from "./components/main/MainTemplate";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainTemplate></MainTemplate>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
