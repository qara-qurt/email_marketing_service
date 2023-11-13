import styles from "./Header.module.css"
import Button from "components/Button/Button.tsx";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header__logo}>
                        <h3>SwiftSender</h3>
                    </div>
                    <div className={styles.header__navbar}>
                        <nav>
                            <a href="">Возможности</a>
                            <a href="">Цены</a>
                            <a href="">Поддержка</a>
                        </nav>
                    </div>
                    <div className={styles.header__buttons}>
                        <div className="login">
                            <Button onClick={()=>{
                                navigate("/sign-in")
                            }}>Войти</Button>
                        </div>
                        <div className="register">
                            <Button onClick={()=>{
                                navigate("/sign-up")
                            }}>Регистрация</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
