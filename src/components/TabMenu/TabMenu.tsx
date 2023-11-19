import styles from "./TabMenu.module.css";
import { BiSolidBookBookmark } from "react-icons/bi";
import { FaListUl, FaSave } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";

interface ITabMenu{
  active: number,
  handleActiveTab: (id:number) => void
}

const titles = [
  <><BiSolidBookBookmark />  Адресные книги</>,
  <><FaSave/>  Мои рассылки</>,
  <><HiTemplate/>  Шаблоны</>,
  <><FaListUl />  Тарифы</>
]
const TabMenu = ({active,handleActiveTab}:ITabMenu) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.side_menu}>
        <div className={styles.logo}>
          SwiftSender
        </div>
        <ul className={styles.navbar}>
          {titles.map((title,idx)=>(
            <li key={idx} className={active==idx?styles.active:""} onClick={()=>handleActiveTab(idx)}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabMenu;
