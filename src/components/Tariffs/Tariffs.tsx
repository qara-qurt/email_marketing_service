import styles from "./Tariffs.module.css";
import TariffCard from "components/Tariffs/TariffCard.tsx";
const Tariffs = () => {
  return (
    <div className={styles.tariffs}>
      <div className={styles.container}>
        <div className={styles.tariffs_body}>
         <TariffCard title={"Бесплатно"} text={"Все бесплатно: 300 писем в день Настраиваемые шаблоны писем Drag & Drop редактор\n" +
           "\t\t\t\tТранзакционные письма SMS- и WhatsApp-кампании"}/>
          <TariffCard title={"Стартер"} text={"От 20 тыс. электронных писем в месяц\n" +
            "Нет ежедневного лимита отправки\n" +
            "Без логотипа Brevo (дополнение)\n" +
            "Базовая отчетность и аналитика\n" +
            "Поддержка электронной почты"}/>
          <TariffCard title={"Бизнес"} text={"От 20 тыс. электронных писем в месяц\n" +
            "Автоматизация маркетинга\n" +
            "A/B тестирование\n" +
            "Расширенная статистика\n" +
            "Многопользовательский доступ\n" +
            "Оптимизация времени отправки\n" +
            "Телефонная поддержка"}/>
          <TariffCard title={"Предприятие"} text={"Безопасность корпоративного уровня\n" +
            "Расширенные интеграции\n" +
            "Управление субсчетами\n" +
            "Индивидуальный подход\n" +
            "Персонализированная поддержка\n" +
            "Гибкий контракт"}/>
        </div>

      </div>
    </div>
  );
};

export default Tariffs;
