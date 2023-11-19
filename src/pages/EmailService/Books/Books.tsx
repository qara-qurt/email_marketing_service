import styles from "./Books.module.css"
import { BiSolidBookBookmark } from "react-icons/bi";
import { useEffect, useState } from "react";
import AddBook from "pages/EmailService/AddBook/AddBook.tsx";
import Book from "pages/EmailService/Book/Book.tsx";
import { useSelector } from "react-redux";
import { RootState } from "store/store.ts";
import {IBook} from  "store/bookSlice.ts";

const Books = () => {
  const [booksState, setBooksState] = useState<IBook[]>([]);
  const [isShow, setIsShow] = useState(false);
  const [isShowBook, setIsShowBook] = useState(false);

  const {books} = useSelector((state:RootState)=>state.books)

  const handleAddBook = () =>{
    setIsShow(!isShow)
  }

  const deleteBook = () =>{

  }

  const handleBook = () =>{
    setIsShowBook(!isShowBook)
  }

  useEffect(()=>{
    //get books
    setBooksState(books)
  },[books])


  return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Адресные книги</h3>
			<div className={styles.button} onClick={handleAddBook}>
				<BiSolidBookBookmark /> Создать адресную кингу
			</div>
			<div className={styles.books}>
				{booksState.map((book) => {
					return (
						<div className={styles.book} key={book.name}>
              <div className={styles.head}>
                <h5 onClick={handleBook}>{book.name}</h5>
                <span onClick={deleteBook}>X</span>
              </div>
							<p>Контактов: {book.emails.length}</p>
              {isShowBook ? <Book title={book.name} data={book.emails} closeModal={handleBook}/> : ''}
						</div>
					);
				})}
			</div>
			{isShow ? <AddBook closeModal={handleAddBook} /> : ''}
		</div>
	);
};

export default Books;
