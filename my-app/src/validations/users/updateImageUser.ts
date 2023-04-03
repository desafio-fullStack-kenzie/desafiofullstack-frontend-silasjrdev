import * as yup from "yup";

const formSchemaUpdateImage = yup.object().shape({
    imageUrl: yup
    .string()
    .notRequired()
})

export default formSchemaUpdateImage;