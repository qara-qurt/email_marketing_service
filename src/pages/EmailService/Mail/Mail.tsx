import styles from "./Mail.module.css"
import Button from "components/Button/Button.tsx";
import { IMail } from "store/mailSlice.ts";
import axios from "axios";

interface Mail{
  closeModal:()=>void
  data:IMail,
}

const Mail:React.FC<Mail> = ({ closeModal,data }) => {
  const saveData = async () => {
    //fetch to backend
    const response = await axios.post("http://localhost:5000/send-email",{
      "subject":data.name,
      "body":data.template.data.data.html,
    },{
      withCredentials:true
    })
    console.log(response);
    closeModal()
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h4 className={styles.title}>Отправка рассылки</h4>
        <p>Название : {data.name}</p>
        <p>Шаблон : {data.template.id}</p>
        <p>Адресная книга : {data.mail.name}</p>
        <div className={styles.buttons}>
          <Button onClick={closeModal} bg_color={"#ff5d5d"} color={"#fff"}>Закрыть</Button>
          <Button onClick={saveData} bg_color={"#ff5d5d"} color={"#fff"}>Отправить рассылку</Button>
        </div>
      </div>
    </div>
  );
};

export default Mail;
