import styled from "styled-components"

interface Props{
    texto: string
}

const Botao = styled.button`
width: 280px;
height: 48px;
padding: 12px 16px;
justify-content: center;
align-items: center;
border-radius: 8px;
background-color: #0B3B60;
font-size: 16px;
font-weight: 700;
color: #FFF;
margin: 12px`


export default function Button({texto}: Props) {
    return(
        <Botao>{texto}</Botao>
    )
}

export {}