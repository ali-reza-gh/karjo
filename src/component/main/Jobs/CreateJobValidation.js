import * as Yup from "yup";

export const createJobValidation = Yup.object().shape({
  title: Yup.string().required("required !"),
  description: Yup.string().required("required !"),
  city: Yup.string().required("required !"),
  skills: Yup.array().min(2).required("required !"),
});