import * as Yup from 'yup';

export const esquemaValidacao = Yup.object().shape({
    nome: Yup.string().max(30, 'O nome da clinica deve ter no máximo 30 caracteres!').required('O nome da clínica é obrigatório!'),
    cnpj: Yup.string()
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'CNPJ deve ter 14 dígitos!')
        .required('CNPJ é obrigatório'),})

export {}