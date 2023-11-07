import styles from "./EmailService.module.css";
import { BiSolidBookBookmark } from "react-icons/bi";
import { FaListUl, FaSave } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
const EmailService = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.side_menu}>
        <div className={styles.logo}>
          SwiftSender
        </div>
        <nav className={styles.navbar}>
          <a href=""> <BiSolidBookBookmark />  Адресные книги</a>
          <a href=""><FaSave/>  Мои рассылки</a>
          <a href=""><HiTemplate/>  Шаблоны</a>
          <a href=""><AiFillCheckCircle />  Проверки email</a>
          <a href=""><FaListUl />  Тарифы</a>
        </nav>
      </div>
      <div className={styles.content}>Content</div>
    </div>
  );
};

export default EmailService;
