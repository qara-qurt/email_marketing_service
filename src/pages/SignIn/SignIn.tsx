import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import styles from "./SignIn.module.css";
import Button from "components/Button/Button.tsx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const responseMessage = useGoogleLogin({
    onSuccess: async (response: any) => {
      // const tokens = await googleAuth.getTokens(response.code)
      // console.log(tokens);
     const tokens = await axios.post("https://oauth2.googleapis.com/token",{
        code:response.code,
        client_id:"1092028433387-tkiksf8mvb1d5golclhme55srl94rr9p.apps.googleusercontent.com",
        client_secret:"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",
        redirect_uri:"http://localhost:3000",
        grant_type:"authorization_code"
      })
      console.log(tokens.data);

    },
    flow: 'auth-code',
  });

  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value)
  }

  const handleSignIn = async () => {
    const data = {
      email:email,
      password: password,
    }

    const res = await axios.post("http://localhost:8080/login",data)
    if(res.status == 200){
      navigate("/emailservice")
    }
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
          <GoogleLogin
            onSuccess={responseMessage}
            onError={()=>"error"}
          />
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
