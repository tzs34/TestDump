import React from 'react';
import { useHistory } from 'react-router-dom'
import { googleSignin, emailLogin } from '../User/SignIn';
import style from  './styles.module.css'
function Signin() {
 let history = useHistory();
 const loginWithGoogle = () => {
   googleSignin().then(() => {
     console.log("LOGGED IN W GOOGLE");
     history.push("/demo");
   }).catch(e => console.log(e));
 }
 const loginWithEmail = (e) => {
   e.preventDefault();
   const password = e.target.password.value;
   const email = e.target.email.value;
   emailLogin(email, password).then(() => {
     console.log("LOGGED IN W EMAIL");
     history.push("/demo");
   }).catch(e => console.log(e));
 }
 return (
   <>
     <div className={style.form}>
       <div className={style.loginform}>
         <button className={style.googleloginbutton} onClick={() => loginWithGoogle()}>G Login With Google</button>
         <form onSubmit={loginWithEmail}>
           <div className={style.formdiv}>
             <label>Email:</label>
             <input
               type="email"
               name="email"
               required={true}
             />
           </div>
           <div className={style.formdiv}>
             <label>Password:</label>
             <input
               type="password"
               name="password"
               required={true}
             />
           </div>
           <div className={style.formsubmit}>
             <input type="submit" value="Submit" />
           </div>
         </form>
       </div>
     </div>
   </>
 );
}
export default Signin;