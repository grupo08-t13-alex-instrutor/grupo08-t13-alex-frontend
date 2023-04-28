import * as yup from 'yup';

export const sessionVaidated = yup.object().shape({
    email: yup
        .string()
        .required("Preenchimento do email obrigatório")
        .email("Email inválido"),
    password: yup
        .string()
        .required("Preenchimento da senha obrigatório"),
});


export const reconveriPasswordSendEmail = yup.object().shape({
    email: yup
        .string()
        .required("Preenchimento do email obrigatório para recuperação da senha!")
        .email("Email inválido")
});