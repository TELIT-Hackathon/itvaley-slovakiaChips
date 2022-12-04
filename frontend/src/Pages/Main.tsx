import { Routes, Route } from 'react-router-dom';
import HomePage from "./Homepage";
import MainPage from "./MainPage";
import CatalogPage from "./CatalogPage";
import ExpertsPage from "./ExpertsPage";


const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="Main" element={<MainPage/>}/>
            <Route path="Catalog" element={<CatalogPage/>}/>
            <Route path="Experts" element={<ExpertsPage/>}/>
        </Routes>
    );
}
export default Main;