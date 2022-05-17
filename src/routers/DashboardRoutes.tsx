import { Routes, Route, BrowserRouter } from "react-router-dom";
import DcScreen from "../components/Dc/DcScreen";
import MarvelScreen from "../components/Marvel/MarvelScreen";
import SearchScreen from "../components/Search/SearchScreen";
import HeroScreen from "../components/Hero/HeroScreen";
import NavBar from "../components/ui/NavBar";
import { Container } from "@mui/material";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <Container>

        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          
          <Route path="/search" element={ <SearchScreen /> } />
          <Route path="/hero/:heroId" element={ <HeroScreen /> } />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>

      </Container>

    </>
  );
};
