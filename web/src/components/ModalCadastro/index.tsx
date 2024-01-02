import { Checkbox, FormControlLabel, FormGroup, Modal, Switch } from "@mui/material";
import Titulo from "../Titulo";
import { BotaoCustomizado, BoxCustomizado, Container, ContainerEndereco, ContainerSwitch, TextoSwitch } from "./styles";
import { useState } from "react";
import usePost from "../../usePost";
import autenticaStore from "../../stores/autentica.store";
import IProfissional from "../../types/IProfissional";
import CompoDigitacao from "../CampoDigitacao";
import Subtitulo from "../Subtitulo";

export default function ModalCadastro ({open, handleClose}: {open: boolean, handleClose: () => void}) {
    const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([]);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVerificada, setSenhaVerificada] = useState("");
    const [possuiPlano, setPossuiPlano] = useState(false);
    const [imagem, setImagem] = useState('');
    const [especialidade, setEspecialidade] = useState("");
    const [crm, setCrm] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");
    const [telefone, setTelefone] = useState("");
    const label = { inputProps: { 'aria-label': 'Atende por plano?' } };
    const {cadastrarDados} = usePost();
    const {usuario} = autenticaStore;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = event.target.value;
        if (event.target.checked) {
            setPlanosSelecionados([...planosSelecionados, checkboxValue]);
        } else {
            setPlanosSelecionados(planosSelecionados.filter(plano => plano !== checkboxValue));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
    
        const profissional: IProfissional = {
            nome: nome,
            crm: crm,
            especialidade: especialidade,
            possuiPlanoSaude: possuiPlano,
            estaAtivo: true,
            imagem: imagem,
            senha: senha,
            planoSaude: planosSelecionados,
            email: email,
            telefone: telefone,
            endereco: {
                cep: cep,
                rua: rua,
                estado: estado,
                numero: numero,
                complemento: complemento
            }
        }

        await cadastrarDados({url: "especialista", dados: profissional, token: usuario.token})
        console.log(usuario.token)
    }


    
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Modal de cadastro do especialista"
        aria-describedby="Nesse modal terá os dados de cadastro do especialista"
        >
            <BoxCustomizado>
                <Titulo>Cadastre o especialista inserindo os dados abaixo:</Titulo>
                <form onSubmit={handleSubmit}>
                    <Container>

                    <CompoDigitacao tipo="text" label="Nome" valor={nome} placeholder="Digite seu nome completo" onChange={setNome} />
                    <CompoDigitacao tipo="email" label="Email" valor={email} placeholder="Digite seu email" onChange={setEmail} />
                    <CompoDigitacao tipo="password" label="Senha" valor={senha} placeholder="Digite sua senha" onChange={setSenha} />
                    <CompoDigitacao tipo="password" label="Repita a senha" valor={senhaVerificada} placeholder="Digite sua senha novamente" onChange={setSenhaVerificada} />
                    <CompoDigitacao tipo="text" label="Especialidade" valor={especialidade} placeholder="Qual sua especialidade?" onChange={setEspecialidade} />
                    <CompoDigitacao tipo="number" label="CRM" valor={crm} placeholder="Insira seu número de registro" onChange={setCrm} />
                    <CompoDigitacao tipo="tel" label="Telefone" valor={telefone} placeholder="(DDD) XXXXX-XXXX" onChange={setTelefone} />
                    <CompoDigitacao tipo="text" label="Insira a URL da sua imagem" valor={imagem} placeholder="https://img.com/fotos/retrato-de-um-jovem-medico" onChange={setImagem} />

                    <CompoDigitacao
                                tipo="number"
                                label="Endereço"
                                valor={cep}
                                placeholder="Insira o CEP"
                                onChange={setCep}
                            />
                            <ContainerEndereco>
                                <CompoDigitacao
                                    tipo="text"
                                    valor={rua}
                                    placeholder="Rua"
                                    onChange={setRua}
                                />
                                <CompoDigitacao
                                    tipo="number"
                                    valor={numero}
                                    placeholder="Número"
                                    onChange={setNumero}
                                />
                                <CompoDigitacao
                                    tipo="text"
                                    valor={complemento}
                                    placeholder="Complemento"
                                    onChange={setComplemento}
                                />
                                <CompoDigitacao
                                    tipo="text"
                                    valor={estado}
                                    placeholder="Estado"
                                    onChange={setEstado}
                                />
                            </ContainerEndereco>
                    </Container>
                    <ContainerSwitch>
                            <Subtitulo>Atende por plano?</Subtitulo>
                            <Switch {...label} onChange={() => {
                                possuiPlano ?
                                    setPossuiPlano(false) :
                                    setPossuiPlano(true)
                            }
                            } />
                            <TextoSwitch>Não/Sim</TextoSwitch>
                    </ContainerSwitch>
                        {possuiPlano ?
                            <>
                                <Subtitulo>Selecione os planos:</Subtitulo>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onChange={handleChange} value="Sulamerica" />} label="Sulamerica" />
                                    <FormControlLabel control={<Checkbox onChange={handleChange} value="Unimed" />} label="Unimed" />
                                    <FormControlLabel control={<Checkbox onChange={handleChange} value="Bradesco" />} label="Bradesco" />
                                    <FormControlLabel control={<Checkbox onChange={handleChange} value="Amil" />} label="Amil" />
                                    <FormControlLabel control={<Checkbox onChange={handleChange} value="Biosaúde" />} label="Biosaúde" />
                                    <FormControlLabel control={<Checkbox onChange={handleChange} value="Biovida" />} label="Biovida" />
                                    <FormControlLabel control={<Checkbox onChange={handleChange} value="Outro" />} label="Outro" />
                                </FormGroup>
                            </>
                            : ''}
                        <BotaoCustomizado>Cadastrar</BotaoCustomizado>
                </form>
            </BoxCustomizado>

        </Modal>
    )
}

export {}