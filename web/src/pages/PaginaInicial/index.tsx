import { Container } from "@mui/material";
import { Banner } from "./Banner";
import Formulario from "./Pesquisa";
import Atividades from "./Atividades";
import Depoimentos from "./Depoimentos";

export default function PaginaInicial(){
    return (
        <>
        <Banner/>
        <Container>
            <Formulario/>
            <Atividades/>
            <Depoimentos/>
        </Container>
        </>
    )
}