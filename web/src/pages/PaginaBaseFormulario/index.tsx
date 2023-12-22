import styled from 'styled-components'
import imagemDeFundo from './backgorund.png'
import { Outlet } from 'react-router-dom'

const ContainerPrincipal =styled.div`
background-image: url(${imagemDeFundo});
background-size: cover;
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;`

const Container = styled.div`
background-color: white;
width: 60%;
min-height: 100vh;
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