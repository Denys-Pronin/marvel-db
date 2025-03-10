import Header from "../Header/Header.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CharactersPage from "../../pages/CharactersPage/CharactersPage.jsx";
import ComicsPage from "../../pages/ComicsPage/ComicsPage.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsPage />} />
      </Routes>
    </>
  );
}

export default App;
