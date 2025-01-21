import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Watchpage/Feed";

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="flex bg-black">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
