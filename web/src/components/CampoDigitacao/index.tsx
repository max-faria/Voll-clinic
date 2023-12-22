import styled from "styled-components";

const Campo = styled.input`
background: #f0f0f0;
margin: 1em 0;
box-sizing: border-box;
box-shadow: 2px 2px 6px rgba(0,0,0, 0.25);
border-radius: 8px;
border: none;
width: 100%;
padding: 16px;
font-size: 16px;
`

const CampoContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: flex-start; 
`;


interface  Props {
    valor: string,
    tipo: string,
    placeholder: string,
    onChange: (value: string) => void,
    label?: string;
}

const Rotulo = styled.label`
display: block;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #0B3B60;
`


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center
`

export default function CompoDigitacao({valor, tipo, placeholder, onChange, label}: Props){
    return (
        <Container>
            <CampoContainer>
                <Rotulo>{label}</Rotulo>
                <Campo
                    type={tipo}
                    value={valor}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    required/>
            </CampoContainer>
        </Container>
    )
}

export {}