import * as yup from "yup"

export const productFromSchema = yup.object().shape({
    name: yup.string().trim().required(),
    quantityPerUnit: yup.string().required(),
    unitPrice: yup.number().positive().required(),
    unitsOnOrder: yup.number().positive.required(),

})