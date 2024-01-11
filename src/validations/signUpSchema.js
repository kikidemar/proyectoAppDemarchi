import { object, string,ref} from "yup"

export const signUpSchema = object({
    email:string()
        .email("Ingrese un mail valido")
        .required("Ingrese un mail"),
    password:string()
        .min(6,"minimo 6 caracteres")
        .required("Ingrese un password"),
    confirmPassword:string()
        .oneOf([ref("password")],"Los password no son iguales")
        .required("Vuelva a ingresar el mail")
})