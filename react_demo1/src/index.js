import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import App from "./App.jsx";

const About = () => {
    return <h1>About</h1>;
};

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);