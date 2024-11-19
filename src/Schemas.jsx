import * as Yup from 'yup';

export const calcutaleSchemas = Yup.object({
    amount:Yup.number().required("Please Enter Your Amount").min(2),
    mortgage_term:Yup.number().min(2).required("Please Enter Year"),
    interest_rate:Yup.number().min(2).required("Please Enter Your interest_rate"),
})  