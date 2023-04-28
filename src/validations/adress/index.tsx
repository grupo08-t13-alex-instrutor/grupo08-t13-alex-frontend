import * as yup from "yup"

export const addressSchema = yup.object({
    cep: yup.string()
        .matches(/([0-9]{5})([-]{1})([0-9]{3})/, {
            excludeEmptyString: true,
            message: 'O padrão de cep é 00000-000'
        }).notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired()
})