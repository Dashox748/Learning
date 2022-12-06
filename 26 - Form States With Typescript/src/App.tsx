import './App.css'
import {FormEvent, useState} from "react";
import {ErorrsParams, FormTypes} from "./utils/interfaces";
import {formValidation} from "./utils/formValidation"

function App() {
    const [formParams, setFormParams] = useState<FormTypes>({} as FormTypes)
    const [formErrors, setFormErrors] = useState<ErorrsParams>({} as ErorrsParams)

    const handeSubmit = (event: FormEvent) => {
        event.preventDefault();
        let errors = formValidation(formParams)
        setFormErrors(errors)
        if (Object.values(errors).includes(true)) return

        console.log("dziala")
    }

    return (
        <div className="App">
            <form onSubmit={handeSubmit}>
                <label htmlFor="login"> <span className={formErrors.login ? "error" : ""}>Login</span>
                    <input type="text" name="login" onChange={(event) => {
                        setFormParams({...formParams, login: event.target.value})
                    }}/>
                </label>
                <label htmlFor="password"> <span className={formErrors.password ? "error" : ""}>Password</span>
                    <input type="password" name="password" onChange={(event) => {
                        setFormParams({...formParams, password: event.target.value})
                    }}/>
                </label>
                <label htmlFor="termsCheck"> <span className={formErrors.termsCheck ? "error" : ""}>Checkbox</span>
                    <input type="checkbox" name="termsCheck" onChange={(event) => {
                        setFormParams({...formParams, termsCheck: event.target.checked})
                    }}/>
                </label>
                <button>Register</button>
            </form>
        </div>
    )
}

export default App
