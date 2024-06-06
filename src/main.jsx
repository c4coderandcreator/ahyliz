import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import Home from "./components/Home/Home";
import About from "./components/Routes/About/About";
import Careers from "./components/Routes/Careers/Careers";
import ContactUs from "./components/Routes/ContactUs/ContactUs";
import Services from "./components/Routes/Services/Services";
import Legal from "./components/Routes/Legal/Legal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/legal" element={<Legal />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
