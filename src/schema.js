import * as yup from 'yup'

export default yup.object().shape({
    text: yup.string()
    .required('please enter name!')
    .min(2, 'name must be at least 2 characters'),
    size: yup.string(),
    mushroom: yup.bool(),
    cheese: yup.bool(),
    pepperoni: yup.bool(),
    sausage: yup.bool(),
    special: yup.string(),
})