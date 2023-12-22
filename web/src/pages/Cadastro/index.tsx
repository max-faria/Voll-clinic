import Imagem from "../../components/Imagem"
import logo from "../../assets/logo.png"
import { Step, StepLabel, Stepper } from "@mui/material"
import styled from "styled-components"
import { useState } from "react"
import { Formulario, TituloCadastro } from "./styles"
import CompoDigitacao from "../../components/CampoDigitacao"
import Button from "../../components/Button"

interface PropsCustomizadas{
    cor: string,
}

const StepCustomizada = styled.div<PropsCustomizadas>`
background-color: ${({cor}) => cor}; 
width: 16px;
height: 16px;
border-radius: 50px;
`

export default function Cadastro(){

    const [etapaAtiva, setEtapaAtiva] = useState(0)

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    return (
        <>
        <Imagem src={logo} alt="logo da voll"/>
        <Stepper activeStep={etapaAtiva}>
            <Step>
                <StepLabel
                        StepIconComponent={(props) => (
                            <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                        )}
                    />
            </Step>
            <Step>
            <StepLabel
                StepIconComponent={(props) => (
                    <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                )}/>
            </Step>
        </Stepper>

        {etapaAtiva === 0 ? (
            <>
            <TituloCadastro>Primeiro, alguns dados básicos</TituloCadastro>
            <Formulario>
                <CompoDigitacao 
                valor={nome}
                tipo='text'
                placeholder="Digite o nome da clínica"
                onChange={setNome}
                label='Nome'/>

                <CompoDigitacao 
                valor={cnpj}
                tipo='text'
                placeholder="Digite o CNPJ"
                onChange={setCnpj}
                label='CNPJ'/>

                <CompoDigitacao 
                valor={email}
                tipo='text'
                placeholder="Digite o endereço de email para login"
                onChange={setEmail}
                label='Email'/>

                <CompoDigitacao 
                valor={senha}
                tipo='text'
                placeholder="Digite sua senha"
                onChange={setSenha}
                label='Crie uma senha'/>


                <CompoDigitacao 
                valor={nome}
                tipo='text'
                placeholder="Digite sua senha novamente"
                onChange={setNome}
                label='Confirme sua senha'/>

                <Button texto='Avançar'/>
            </Formulario>
            </>
        ):(
            <>
            </>
        )
        }
        </>
    )
}

export {}