import * as yup  from "yup"

export const validacaoCadastro = yup.object().shape({
    name: yup
        .string()
        .required("Preenchimento do nome obrigatório"),
    cpf: yup
        .string()
        .required("Preenchimento do cpf obrigatório")
        .matches(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/, "O padrão de cpf é 000.000.000-00"),
    email: yup
        .string()
        .required("Preenchimento do email obrigatório")
        .email("Email inválido"),
    password: yup.string()
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
        .matches(/(\d)/, "Deve conter ao menos um número")
        .matches(/(\W)|_/, "Deve conter um caracter especial")
        .required("Preenchimento da senha obrigatório")
        .min(8, "no mínimo 8 caracteres"),
    telephone: yup
        .string()
        .required("Preenchimento do campo do celular obrigatório")
        .matches(/^\(\d{2}\)\d{5}-\d{4}$/, "O padrão para o telefone é (00)00000-0000"),
    date_of_birth: yup
        .string()
        .required("Preenchimento do campo data de nascimento obrigatório")
        .matches(/([0-9]{2})([\/]{1})([0-9]{2})([\/]{1})([0-9]{4})/, "O padrão de desse campo é \'00/00/0000\'' "),
    description: yup
        .string()
        .required("Preenchimento do campo descrição obrigatório")
        .max(300, 'Deve ter no máximo 300 caracteres'),
    cep: yup
        .string()
        .required("Preenchimento do campo cep obrigatório")
        .matches(/([0-9]{5})([-]{1})([0-9]{3})/, 'O padrão de cep é 00000-000')
        .max(9),
    state: yup
        .string().required("Preenchimento do campo estado obrigatório"),
    city: yup
        .string().required("Preenchimento do campo cidade obrigatório"),
    street: yup
        .string().required("Preenchimento do campo rua obrigatório"),
    number: yup
        .string()
        .required("Preenchimento do compo número obrigatório"),
    complement: yup.string().required("Preenchimento do campo complemento obrigatório").max(200),
    confirmPassword: yup.string()
        .required("Preenchimento da confirmação de senha obrigatório")
        .oneOf([yup.ref("password")], "senhas não iguais")
});
