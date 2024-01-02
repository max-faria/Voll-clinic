import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import BasePagina from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaBaseFormularo from "./pages/PaginaBaseFormulario";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RotaPrivada from "./utils/RotaPrivada";


export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BasePagina/>}>
            <Route index element={<PaginaInicial/>}/>
            <Route element={<RotaPrivada/>}>
            <Route path="/dashbord" element={<Dashbord/>} />
            </Route>
            </Route>
            <Route path="/" element={<PaginaBaseFormularo/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            </Route>
       
        </Routes>
        

     
        </BrowserRouter>
    )
}

export {}