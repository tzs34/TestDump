import React, {useState} from 'react'
import SignupForm from './Form/Login'

import style from './styles.module.css'


const SignupPage = () => {

    const [step, setStep] = useState(1)
    function onSubmitUserDetails(values){
        setStep(2)
    }

    function onSubmitUserPreferences(){

    }

    return (
        <div className={style.signupouter}>
            <main className={style.signupcontainer}>
                <div>
                    <SignupForm 
                        submitUserDetails={onSubmitUserDetails} 
                        submitUserPreferences={onSubmitUserPreferences}
                        step={step}
                        />
                </div>
            </main>
        </div>
    )
}

export default SignupPage