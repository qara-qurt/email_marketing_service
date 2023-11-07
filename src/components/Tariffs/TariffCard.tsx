import styles from "components/Tariffs/Tariffs.module.css";
import Button from "components/Button/Button.tsx";

interface ITariffCard {
  title:string,
  text:string
}
const TariffCard = ({title,text}:ITariffCard) => {
  return (
		<div className={styles.tariff__card}>
			<div>
        <h4>{title}</h4>
        <p>
          {text}
        </p>
      </div>
			<Button color={'#fff'} bg_color={'#ff5d5d'}>Попробовать</Button>
		</div>
	);
};

export default TariffCard;
