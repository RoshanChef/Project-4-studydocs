import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
        <Toaster />
    </BrowserRouter>
);

// link : https://excalidraw.com/#json=5Jmxvl9bKQSqqi8Kbz7vE,UtayCf1GTdTy92Hwuv_yfw