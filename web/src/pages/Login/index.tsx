import { useState } from "react"
import CampoDigitacao from "../../components/CampoDigitacao/index"
import LoginTitulo from "../../components/LoginTitulo"
import Button from "../../components/Button"
import Paragrafo from "../../components/Paragrafo"
import logo from "../../assets/logo.png"
import Imagem from "../../components/Imagem"


export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    return (
        <>
        <Imagem src={logo} alt="logo da voll"/>
        <LoginTitulo/>
            <CampoDigitacao 
            valor={email} 
            tipo='text' 
            placeholder='Insira aqui seu email' 
            onChange={setEmail} 
            label='Email' />
            <CampoDigitacao
            valor={senha}
            tipo='text'
            placeholder="Insira sua senha"
            onChange={setSenha}
            label='Senha'
            />
            <Button texto='Entrar'/>
            <Paragrafo 
            texto='Esqueceu senha senha?' 
            subtexto="Ainda não tem conta?"
            linkText='Faça seu cadastro!'
            />
        </>
    )
}

export {}