import styled from 'styled-components'
import imagemDeFundo from './backgorund.png'
import { Outlet } from 'react-router-dom'

const ContainerPrincipal =styled.div`
background-image: url(${imagemDeFundo});
background-size: cover;
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;`

const Container = styled.div`
background-color: white;
height: 100%;
width:60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


export default function PaginaBaseFormularo() {
    return (
        <ContainerPrincipal>
            <Container>
                <Outlet/>
            </Container>
        </ContainerPrincipal>
    )
}

export {}