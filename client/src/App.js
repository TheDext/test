import React from "react";
import MainPage from "./pages/main.page";

const App = ({ isLoading }) => {
  return isLoading ? "Loading..." : <MainPage />;
};

export default App;
