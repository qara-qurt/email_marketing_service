import styles from "./AddMailing.module.css"
import Button from "components/Button/Button.tsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store.ts";
import { saveMail } from "store/mailSlice.ts";

interface IAddMailing{
  closeModal:()=>void
}

const AddMailing:React.FC<IAddMailing> = ({ closeModal }) => {
  const [name, setName] = useState("");
  const {books} = useSelector((state:RootState)=>state.books)
  const {templates} = useSelector((state:RootState)=>state.template)

  const [bookState,setBookState] = useState(books[0]?.name)
  const [templateState,setTemplateState] = useState(0)
  const dispatch = useDispatch()
  const saveData = () => {
    console.log(bookState);
    const res = books.find((b)=>b.name==bookState)


    dispatch(saveMail({name:name,mail:res,template:{id:templateState,data:templates[templateState]}}));
    closeModal()
  }

  const handleBook = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setBookState(e.target.value)
  }

  const handleTemplate = (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setTemplateState(Number(e.target.value))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h4 className={styles.title}>Создание рассылки</h4>
        <p>
          Название рассылки :
        </p>
        <input type="text" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}}/>
        <div>
          <label htmlFor="books">Выбрать адресную книгу : </label>
          <select id="books" name="books" onChange={handleBook} value={bookState}>
            {books.map(book=>(
              <option key={book.name} value={book.name}>{book.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="template">Выбрать шаблон для отправки : </label>
          <select id="template" name="template" onChange={handleTemplate} value={templateState}>
            {templates.map((_,idx)=>(
              <option key={idx} value={idx}>{idx}</option>
            ))}
          </select>
        </div>
        <div className={styles.buttons}>
          <Button onClick={closeModal} bg_color={"#ff5d5d"} color={"#fff"}>Закрыть</Button>
          <Button onClick={saveData} bg_color={"#ff5d5d"} color={"#fff"}>Создать</Button>
        </div>
      </div>
    </div>
  );
};

export default AddMailing;
