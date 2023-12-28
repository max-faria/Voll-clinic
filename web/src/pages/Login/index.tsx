import { useState } from "react"
import CampoDigitacao from "../../components/CampoDigitacao/index"
import LoginTitulo from "../../components/LoginTitulo"
import Button from "../../components/Button"
import Paragrafo from "../../components/Paragrafo"
import logo from "../../assets/logo.png"
import Imagem from "../../components/Imagem"
import { Formulario } from "../Cadastro/styles"
import usePost from "../../usePost"

interface ILogin {
    email:string,
    senha: string,
}

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {cadastrarDados, erro, sucesso} = usePost()

    const handleLogin =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const usuario: ILogin = {
            email: email,
            senha: senha
        }

        try {
            cadastrarDados({url: 'auth/login', dados: usuario})
        } catch (erro) {
            erro && alert ('Não foi possível fazer o login')
        }
    }
    
    return (
        <>
        <Imagem src={logo} alt="logo da voll"/>
        <LoginTitulo/>
        <Formulario onSubmit={handleLogin}>
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
        </Formulario>

            <Paragrafo 
            texto='Esqueceu senha senha?' 
            subtexto="Ainda não tem conta?"
            linkText='Faça seu cadastro!'
            />
        </>
    )
}

export {}