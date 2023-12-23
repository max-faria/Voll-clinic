import Imagem from "../../components/Imagem"
import logo from "../../assets/logo.png"
import { Step, StepLabel, Stepper } from "@mui/material"
import { useState } from "react"
import { BotaoCustomizado, Container, Formulario, StepCustomizada, TituloCadastro } from "./styles"
import CompoDigitacao from "../../components/CampoDigitacao"
import Button from "../../components/Button"
import axios from 'axios'
import { esquemaValidacao } from "./EsquemaValidacao"

type ErrosFormulario = {
    nome?: string;
    cnpj?: string;
    // Defina outros campos de erro conforme necessário
};

export default function Cadastro(){

    const [etapaAtiva, setEtapaAtiva] = useState(0)
    
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaVerificada, setSenhaVerificada] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [complemento, setComplemento] = useState('')

    const [erros, setErros] = useState<ErrosFormulario>({});


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await esquemaValidacao.validate({nome},{ abortEarly: false })
            setEtapaAtiva(etapaAtiva + 1);
        }catch(err){
            console.log(err)
        }
    }

    const handleNomeChange = (novoNome: string) => {
        setNome(novoNome);
        esquemaValidacao.validateAt('nome', { nome: novoNome })
            .then(() => setErros({ ...erros, nome: '' }))
            .catch(err => setErros({ ...erros, nome: err.message }));
    };

    const handleCnpjChange = (novoCnpj: string) => {
        setCnpj(novoCnpj);
        esquemaValidacao.validateAt('cnpj', { cnpj: novoCnpj })
            .then(() => setErros(errosAnteriores => ({ ...errosAnteriores, cnpj: '' })))
            .catch(err => setErros(errosAnteriores => ({ ...errosAnteriores, cnpj: err.message })));
    };


    const buscarCep = async (cepDigitado: string) => {
        if (cepDigitado.length === 8) {
            try {
                const res = await axios.get(`https://viacep.com.br/ws/${cepDigitado}/json/`);
                console.log(res.data); // Aqui você recebe os dados do CEP
                // Atualize os outros campos do formulário aqui
                const dados = res.data
                setRua(dados.logradouro)
                setBairro(dados.bairro)
                setCidade(dados.localidade)
                setEstado(dados.uf)
            } catch (error) {
                console.error('Erro ao buscar CEP', error);
            }
        }
    };
    

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
            <Formulario onSubmit={handleSubmit}>
                <CompoDigitacao 
                valor={nome}
                tipo='text'
                placeholder="Digite o nome da clínica"
                onChange={handleNomeChange}
                label='Nome'/>

                {erros.nome && <div className="erro">{erros.nome}</div>}

                <CompoDigitacao 
                valor={cnpj}
                tipo='text'
                placeholder="Digite o CNPJ"
                onChange={handleCnpjChange}
                label='CNPJ'/>

                {erros.cnpj && <div className="erro">{erros.cnpj}</div>}

                <CompoDigitacao 
                valor={email}
                tipo='email'
                placeholder="Digite o endereço de email para login"
                onChange={setEmail}
                label='Email'/>

                <CompoDigitacao 
                valor={senha}
                tipo='password'
                placeholder="Digite sua senha"
                onChange={setSenha}
                label='Crie uma senha'/>


                <CompoDigitacao 
                valor={senhaVerificada}
                tipo='password'
                placeholder="Digite sua senha novamente"
                onChange={setSenhaVerificada}
                label='Confirme sua senha'/>

                <Button texto='Avançar'/>
            </Formulario>
            </>
        ):(
            <>
            <Formulario>
            <TituloCadastro>Agora, alguns dados técnicos:</TituloCadastro>
            <CompoDigitacao 
                valor={telefone}
                tipo='tel'
                placeholder="(XX) X XXXX-XXXX"
                onChange={setTelefone}
                label='Telefone'/>

            <CompoDigitacao 
                valor={cep}
                tipo='number'
                placeholder="Insira o seu CEP"
                onChange={(e) => {
                    setCep(e);
                    buscarCep(e);
                }}
                label='CEP'/>
            
            <CompoDigitacao 
                valor={rua}
                tipo='text'
                placeholder="Rua"
                onChange={setRua}
                label='Endereço'/>

            <Container>
                <CompoDigitacao
                valor={bairro}
                tipo='text'
                placeholder="Bairro"
                onChange={setBairro}
                label=''
                />

                 <CompoDigitacao
                valor={cidade}
                tipo='text'
                placeholder="Cidade"
                onChange={setCidade}
                label=''
                />

                <CompoDigitacao
                valor={estado}
                tipo='text'
                placeholder="Estado"
                onChange={setEstado}
                label=''
                />

                <CompoDigitacao
                valor={complemento}
                tipo='text'
                placeholder="Complemento"
                onChange={setComplemento}
                label=''/>
            </Container>
            <BotaoCustomizado type='submit'>Cadastrar</BotaoCustomizado>
            </Formulario>
            
                
            </>

            
        )
        }
        </>
    )
}

export {}