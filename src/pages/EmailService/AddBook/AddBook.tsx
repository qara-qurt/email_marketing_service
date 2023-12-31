import styles from "./AddBook.module.css"
import Button from "components/Button/Button.tsx";
import * as XLSX from "xlsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveBook } from "store/bookSlice.ts";
import axios from "axios";
interface IAddBook{
  closeModal:()=>void
}

const AddBook = ({ closeModal }:IAddBook) => {

  const [name, setName] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const dispatch = useDispatch()
    const saveData = async () => {
    if (file) {
      const data = await parseExcelFile();
      const res = await axios.post("http://localhost:5000/receivers",{
        add:data.emails
      },{
        withCredentials: true
      })
      console.log(res);

      //test
    }

  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const parseExcelFile = () => {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target?.result;
          if (data) {
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData: string[][] = XLSX.utils.sheet_to_json(sheet, {
              header: 1,
            });

            const extractedEmails = parsedData.reduce(
              (emails: string[], row: string[]) => {
                const email = row[0];
                if (email) {
                  emails.push(email);
                }
                return emails;
              },
              [] as string[]
            );

            const res = {
              name: name,
              emails: extractedEmails
            }

            //fetch request
            dispatch(saveBook(res))
            closeModal()
            resolve(res);  // Resolve the promise with the res object
          }
        };
        reader.onerror = (error) => reject(error);  // Reject the promise if there's an error
        reader.readAsBinaryString(file);
      } else {
        reject(new Error("No file provided"));
      }
    });
  };



  return (
    <div className={styles.wrapper}>
     <div className={styles.modal}>
       <h4 className={styles.title}>Создание адресной книги</h4>
        <p>
          Название адресной книги :
        </p>
       <input type="text" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}}/>
       <div>
         <p>Файл для загрузки:</p>
         <input type="file" onChange={handleFileChange}/>
       </div>
       <div className={styles.buttons}>
        <Button onClick={closeModal} bg_color={"#ff5d5d"} color={"#fff"}>Закрыть</Button>
        <Button onClick={saveData} bg_color={"#ff5d5d"} color={"#fff"}>Сохранить</Button>
       </div>
     </div>
    </div>
  );
};

export default AddBook;
