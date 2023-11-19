import styles from "./EmailService.module.css";
import TabMenu from "components/TabMenu/TabMenu.tsx";
import { useState } from "react";
import Books from "pages/EmailService/Books/Books.tsx";
import Mailing from "pages/EmailService/Mailing/Mailing.tsx";
import Tariffs from "pages/EmailService/Tariffs/Tariffs.tsx";
import Templates from "pages/EmailService/Templates/Templates.tsx";

const tabs = [<Books/>, <Mailing />, <Templates />,<Tariffs />]
const EmailService = () => {

  const [active, setActive] = useState(0);

  const handleActiveTab = (id:number) =>{
    setActive(id)
  }

  return (
		<div className={styles.wrapper}>
			<TabMenu active={active} handleActiveTab={handleActiveTab} />
			<div className={styles.content}>
				{tabs.map((tab, idx) => (idx == active ? <div key={idx}>{tab}</div> : ''))}
			</div>{}
		</div>
	);
};

export default EmailService;
