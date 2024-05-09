import { useState } from "react";
import AddCovidForm from "../components/AddCovidForm";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Global />
      <Provinsi />
      <AddCovidForm />
      <Footer />
    </div>
  );
}

export default App;
