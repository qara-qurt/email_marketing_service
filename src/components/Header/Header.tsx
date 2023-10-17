import styles from "./Header.module.css"
import Button from "components/Button/Button.tsx";

const Header = () => {
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
                        <Button>Войти</Button>
                        <Button>Регистрация</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
