import * as yup from "yup";

const formSchemaUserSession = yup.object().shape({
  email: yup.string().required("Email obrigatório.").email("Email inválido"),
  password: yup.string().required("Senha obrigatória."),
});

export default formSchemaUserSession;