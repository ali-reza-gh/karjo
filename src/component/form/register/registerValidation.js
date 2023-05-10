import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(20, "password should have a maximum length of 20")
    .required("password is required"),
  confirmPassword: yup
    .string("password should be a string")
    .oneOf([yup.ref("password")])
    .required("confirm password is required"),
  Type: yup
    .string("gender should be a string")
    .oneOf(["Male", "Female", "Rather not say"])
    .required("gender is required"),
  toggle: yup.boolean().oneOf([true], "Please toggle accept"),
});