import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import BasePagina from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaBaseFormularo from "./pages/PaginaBaseFormulario";
import Login from "./pages/Login";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BasePagina/>}>
            <Route path="/dashbord" element={<Dashbord/>} />
            <Route index element={<PaginaInicial/>}/>
            </Route>
            <Route path="/" element={<PaginaBaseFormularo/>}>
            <Route path="/login" element={<Login/>}/>
            </Route>
       
        </Routes>
        

     
        </BrowserRouter>
    )
}

export {}