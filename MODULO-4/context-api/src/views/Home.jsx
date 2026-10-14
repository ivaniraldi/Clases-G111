import React from "react";
import Navbar from "../components/Navbar";
import Galeria from "../components/Galeria";
import Footer from "../components/Footer";
import Contador from "../components/Contador";

export default function Home() {
  return (
    <>
      <Navbar />
      <Contador />
      <Galeria />
      <Footer />
    </>
  );
}
