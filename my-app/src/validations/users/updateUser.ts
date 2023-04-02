import * as yup from "yup";

const formSchemaUpdateUser = yup.object().shape({
    fullName: yup
    .string()
    .notRequired(),
    email: yup
    .string()
    .email("Email tem que ser válido")
    .notRequired(),
    password: yup
    .string()
    .matches(/[a-zA-Z]/, "A senha deve conter ao menos uma letra")
    .matches(/(\d)/, "A senha deve conter ao menos um número")
    .matches(/(\W)|_/, "A senha deve conter um caracter especial")
    .matches(/.{8,}/, "A senha deve ter no mínimo 8 caracteres")
    .notRequired(),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senha incorreta")
    .notRequired(),
    contact: yup
    .string()
    .matches(/.{11,11}/, "O campo deve ter 11 caracteres")
    .notRequired(),
})

export default formSchemaUpdateUser