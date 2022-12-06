import {ErorrsParams, FormTypes} from "./interfaces";

export const formValidation = (formValues: FormTypes) => {
    let tempErrors = {} as ErorrsParams
    tempErrors.login = formValues?.login ? formValues.login.trim().length === 0 : true
    tempErrors.password = formValues?.password ? formValues.password.trim().length <= 4 : true
    tempErrors.termsCheck = formValues?.termsCheck ? !formValues.termsCheck : true;
    return tempErrors
}