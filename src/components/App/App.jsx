import Header from "../Header/Header.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CharactersPage from "../../pages/CharactersPage/CharactersPage.jsx";
import ComicsPage from "../../pages/ComicsPage/ComicsPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import ComicInfo from "../ComicInfo/ComicInfo.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/comics/:comicId" element={<ComicInfo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
