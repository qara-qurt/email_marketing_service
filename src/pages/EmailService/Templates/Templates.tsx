import styles from "./Templates.module.css"
import { AiOutlinePlusSquare } from "react-icons/ai";
import temp from "assets/template.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/store.ts";
import { useEffect, useState } from "react";


const Templates = () => {
  const {templates} = useSelector((state:RootState) => state.template)
  const [templ, setTempl] = useState(templates);
  const navigate = useNavigate()

  useEffect(() => {
    setTempl(JSON.parse(localStorage.getItem("templates")??"")??[])
  }, []);


  return (
    <div className={styles.wrapper}>
      <h2>Шаблоны сообщений</h2>
      <div className={styles.button} onClick={()=>navigate("/emailservice/constructor")}>
        <AiOutlinePlusSquare style={{fontSize:24,marginRight:5}}/>Добавить шаблон
      </div>
      <div className={styles.templates}>
        {templ.map((_,idx)=>(
            <div key={idx} className={styles.template} onClick={()=>navigate(`/emailservice/constructor/${idx}`)}>
              <img src={temp} alt="" />
            </div>
      ))}
      </div>
    </div>
  );
};

export default Templates;
