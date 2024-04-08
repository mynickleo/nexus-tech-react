import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Home/Home'
import Blur from '../../components/ui/blur/Blur'
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer'
import NotFound from "../NotFound/NotFound"
import Workstations from "../Workstations/Workstations"
import WorkstationsDetail from "../WorkstationsDetail/WorkstationsDetail"
import Catalog from "../Catalog/Catalog"
import CatalogDetail from "../CatalogDetail/CatalogDetail"
import About from "../About/About"
import Profile from "../Profile/Profile"

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Blur />
            <Routes>
                <Route element = {<Home />} path = '/' />
                <Route element = {<Workstations />} path = '/workstations' />
                <Route element = {<WorkstationsDetail />} path = '/workstations/:id' />
                <Route element = {<Catalog />} path="/catalog" />
                <Route element = {<CatalogDetail />} path="/catalog/:id" />
                <Route element = {<About />} path="/about" />
                <Route element = {<Profile />} path="/profile" />
                <Route element = {<NotFound />} path = '*' />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router