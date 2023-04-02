import * as yup from "yup";

const formSchemaContactRegister = yup.object().shape({
    fullName: yup
    .string()
    .required("Coloque seu nome"),
    email: yup
    .string()
    .email("Email tem que ser válido")
    .required("Preencha o campo e-mail"),
    contact: yup
    .string()
    .matches(/.{11,11}/, "O campo deve ter 11 caracteres")
    .required("Digite um numero de telefone"),
    address: yup.object({
        city: yup.string().required("Cidade onde mora"),
        state: yup.string().required("Estado onde mora"),
        zipCode: yup.string().required("Digite seu CEP"),
        district: yup.string().required("Bairro onde mora"),
        number: yup.string().required("Numero onde reside"),
    })
})

const formSchemaUpdateContact = yup.object().shape({
    fullName: yup
    .string()
    .notRequired(),
    email: yup
    .string()
    .email("Email tem que ser válido")
    .notRequired(),
    contact: yup
    .string()
    .matches(/.{11,11}/, "O campo deve ter 11 caracteres")
    .notRequired(),
})

const formSchemaUpdateAddressContact = yup.object().shape({
    city: yup.string().notRequired(),
    state: yup.string().notRequired(),
    zipCode: yup.string().notRequired(),
    district: yup.string().notRequired(),
    number: yup.string().notRequired(),
})



export {formSchemaContactRegister, formSchemaUpdateContact, formSchemaUpdateAddressContact}