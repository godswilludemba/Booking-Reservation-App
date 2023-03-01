import React from "react";
import Feature from "../components/Feature";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer mt-[50px] flex items-center gap-7 flex-col">
        <Feature />
        <h1 className="homeTitle w-full max-w-5xl font-medium text-lg">
          Get inspiration for your next trip
        </h1>
        <PropertyList />
        <h1 className="homeTitle w-full max-w-5xl font-medium text-lg">
          Browse by property type
        </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
