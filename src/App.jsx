import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
