import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from "./container/navbar";
//pages
import Home from "./pages/home";
import Profiles from "./pages/profiles";
//context
import { UserProvider } from "./context/user";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profiles" element={<Profiles />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
