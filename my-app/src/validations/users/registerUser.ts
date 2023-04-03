import * as yup from "yup";


const formSchemaUserRegister = yup.object().shape({
    fullName: yup
    .string()
    .required("Coloque seu nome"),
    email: yup
    .string()
    .email("Email tem que ser válido")
    .required("Preencha o campo e-mail"),
    password: yup
    .string()
    .matches(/[a-zA-Z]/, "A senha deve conter ao menos uma letra")
    .matches(/(\d)/, "A senha deve conter ao menos um número")
    .matches(/(\W)|_/, "A senha deve conter um caracter especial")
    .matches(/.{8,}/, "A senha deve ter no mínimo 8 caracteres")
    .required("Preencha com a senha"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senha incorreta")
    .required("Confirme sua senha"),
    contact: yup
    .string()
    .matches(/.{11,11}/, "O campo deve ter 11 caracteres")
    .required("Digite um numero de telefone"),
    imageUrl: yup
    .string()
    .notRequired(),
})

export default formSchemaUserRegister;