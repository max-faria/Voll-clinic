import { Campo, CampoContainer, Container, Rotulo } from "./styles";

interface  Props {
    valor: string,
    tipo: string,
    placeholder: string,
    onChange: (value: string) => void,
    label?: string;
}

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