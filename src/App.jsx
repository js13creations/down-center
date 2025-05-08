import { useState } from "react";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="down-center">
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
