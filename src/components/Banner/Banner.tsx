import Button from "components/Button/Button.tsx";
import styles from "./Banner.module.css"
import banner from "assets/banner.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.banner__body}>
          <div className={styles.banner__content}>
            <h2>Email рассылка</h2>
            <p className={styles.description}>Увелиьте доход с нашим круглосуточным сервисом email-маркетинг</p>
            <div className={styles.banner__input}>
              <input type="text" placeholder={"Email"} />
              <Button color={"#fff"} bg_color={"#ff5d5d"}>Попробовать</Button>
            </div>
            <p className={styles.banner__text}>15 000 писем в месяц бесплатно *Без банковской карты</p>
          </div>
          <div className={styles.banner__img}>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
