import * as Yup from 'yup';

export const esquemaValidacao = Yup.object().shape({
    nome: Yup.string().max(30, 'O nome da clinica deve ter no máximo 30 caracteres!').required('O nome da clínica é obrigatório!'),
    cnpj: Yup.string().required('O CNPJ é obrigatório!').matches(/^\d{14}$/, 'CNPJ deve ter 14 dígitos!')
})

export {}