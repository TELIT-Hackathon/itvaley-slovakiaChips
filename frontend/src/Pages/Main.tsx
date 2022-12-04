import { Routes, Route } from 'react-router-dom';
import HomePage from "./Homepage";
import MainPage from "./MainPage";
import CatalogPage from "./CatalogPage";
import ExpertsPage from "./ExpertsPage";
import ExpertProfilePage from "./ExpertProfilePage";
import MyProfilePage from "./MyProfilePage";


const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="Main" element={<MainPage/>}/>
            <Route path="Catalog" element={<CatalogPage/>}/>
            <Route path="Experts" element={<ExpertsPage/>}/>
            <Route path="ExpertProfile" element={<ExpertProfilePage/>}/>
            <Route path="MyProfile" element={<MyProfilePage/>}/>
        </Routes>
    );
}
export default Main;