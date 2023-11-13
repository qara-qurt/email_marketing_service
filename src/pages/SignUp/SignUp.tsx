import Button from "components/Button/Button.tsx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";

const SignIn = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const handleSignUp = async () => {
    if (password === confirmPassword){
      const data = {
        email:email,
        password: password,
      }

      const res = await axios.post("http://localhost:8080/register",data)
      console.log(res);

      setEmail("")
      setPassword("")
      setConfirmPassword("")
    }else {
      alert("Пароли не совпадают")
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sign_up}>
          <h2>Sign-up</h2>
          <form action="">
            <input type="text"  placeholder={"email"} value={email} onChange={handleEmail}/>
            <input type="password"  placeholder={"password"} value={password} onChange={handlePassword}/>
            <input type="password"  placeholder={"confirm password"} value={confirmPassword} onChange={handleConfirmPassword}/>
            <Button color={"#fff"} bg_color={"#ff5d5d"} onClick={handleSignUp}>Зарегистрироваться</Button>
          </form>
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
