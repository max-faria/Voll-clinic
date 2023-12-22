import { Link } from "react-router-dom";
import styled from "styled-components"

interface Props{
    texto: string,
    subtexto: string,
    linkText: string,
    
}

const Paragraph = styled.a`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #0B3B60;
margin:0;
cursor: pointer;

&:hover {
    color: #339CFF;
  }
`

const SubParagraph = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #0B3B60;
margin: 32px;
`;

const LinkCustomizado = styled(Link)`
color: #339CFF;
font-weight: 700;
text-decoration: none;
`



export default function Paragrafo({texto, subtexto, linkText}: Props) {
    return (
        <>
        <Paragraph>{texto}</Paragraph>
        <SubParagraph>{subtexto}
        <LinkCustomizado to='/cadastro'> {linkText}</LinkCustomizado>
        </SubParagraph>
        </>
    )
}

export {}