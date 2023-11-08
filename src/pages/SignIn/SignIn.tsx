import { GoogleLogin } from '@react-oauth/google';
import styles from "./SignIn.module.css";
import Button from "components/Button/Button.tsx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const responseMessage = (response:any) => {
    console.log(response);
  };

  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value)
  }

  const handleSignIn = () => {
    const data = {
      email:email,
      password: password,
    }

    console.log(data);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sign_in}>
          <h2>Sign-in</h2>
          <form action="">
            <input type="text"  placeholder={"email"} value={email} onChange={handleEmail}/>
            <input type="password"  placeholder={"password"} value={password} onChange={handlePassword}/>
            <Button color={"#fff"} bg_color={"#ff5d5d"} onClick={handleSignIn}>Войти</Button>
          </form>
          <GoogleLogin onSuccess={responseMessage} onError={()=>"error"} />
        </div>
      </div>
      <AiOutlineArrowLeft
        onClick={()=>{
          navigate("/")
          }}
        style={{position:'absolute',top:'50px',left:'50px',fontSize:32, color:'#fff',cursor:'pointer'}}/>
    </div>
  );
};

export default SignIn;
