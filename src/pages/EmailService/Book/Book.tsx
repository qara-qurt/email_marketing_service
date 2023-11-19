import React from "react";
import styles from "./Book.module.css";
import Button from "components/Button/Button.tsx";

interface IBook{
  title:string,
  data:string[],
  closeModal:()=>void
}
const Book:React.FC<IBook> = ({title,data,closeModal}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h4 className={styles.title}>{title}</h4>
        {data.map((email,idx)=>(
          <div key={idx}>{email}</div>
        ))}
        <div className={styles.buttons}>
          <Button onClick={closeModal} bg_color={"#ff5d5d"} color={"#fff"}>Закрыть</Button>

        </div>
      </div>
    </div>
  );
};

export default Book;
