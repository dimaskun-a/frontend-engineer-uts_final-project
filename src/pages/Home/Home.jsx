import { useState } from "react";
import AddCovidForm from "./components/AddCovidForm";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <div>
      <Hero />
      <Global />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <AddCovidForm provinces={provinces} setProvinces={setProvinces} />
    </div>
  );
}

function HomePage() {
  // Memanggil fungsi main di sini
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
