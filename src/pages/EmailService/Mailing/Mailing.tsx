import styles from "./Mailing.module.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import send from "assets/send.svg"
import { useState } from "react";
import AddMailing from "pages/EmailService/AddMailing/AddMailing.tsx";
import { useSelector } from "react-redux";
import { RootState } from "store/store.ts";
import Mail from "pages/EmailService/Mail/Mail.tsx";

const Mailing = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowMail, setIsShowMail] = useState(false);
  const {mails} = useSelector((state:RootState)=>state.mails)

  const handleModal = () =>{
    setIsShow(!isShow)
  }

  const handleMail = () =>{
    setIsShowMail(!isShowMail)
  }

  return (
    <div className={styles.wrapper}>
      <h2>Мои рассылки</h2>
      {mails.length != 0
        ?
          <div>
            <div className={styles.mails}>
              {mails.map(mail=>(
              <div key={mail.name} className={styles.mailCard} onClick={handleMail}>
                <h4>{mail.name}</h4>
                <p>Количество контактов : {mail.mail.emails.length}</p>
                {isShowMail?<Mail closeModal={handleMail} data={mail} />:""}
              </div>
              ))}
            </div>
            <div className={styles.buttonAbs} onClick={handleModal}>Создать рассылку</div>
          </div>
        : <div className={styles.mail}>
          <img src={send} alt="" />
          <p>Вы еще не отправили ни одной рассылки.</p>
          <p>Давайте ее создадим</p>
          <div className={styles.button} onClick={handleModal}>Создать первую рассылку</div>
        </div>}
      {isShow?<AddMailing closeModal={handleModal} />:""}
    </div>
  );
};

export default Mailing;
