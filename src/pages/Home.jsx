import React from "react";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer mt-[50px] flex items-center gap-7 flex-col">
        <Feature />
      </div>
    </div>
  );
}
