import { GoogleLogin } from '@react-oauth/google';
import styles from "./SignIn.module.css";
import Button from "components/Button/Button.tsx";

const SignIn = () => {
  const responseMessage = (response:any) => {
    console.log(response);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sign_in}>
          <h2>Sign-in</h2>
          <form action="">
            <input type="text"  placeholder={"email"}/>
            <input type="text"  placeholder={"password"}/>
            <Button>Зарегестироваться</Button>
          </form>
        </div>

      </div>
      <GoogleLogin onSuccess={responseMessage} onError={()=>"error"} />
    </div>
  );
};

export default SignIn;
