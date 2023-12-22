import styled from "styled-components"

interface Props{
    src: string,
    alt: string,
}

const Img = styled.img`
  padding: 2em 0;
`

export default function Imagem({src, alt}: Props){
    return (
        <Img src={src} alt={alt} />
    )
}

export {}