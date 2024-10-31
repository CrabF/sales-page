import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";
import { useCertContext } from "../certContext/certContext";

interface CardProps {
  name: string;
  price: number;
  id: number;
  discountPrice: number;
}

export const Card = (props: CardProps) => {
  const navigate = useNavigate();
  const { setSelectedCert } = useCertContext();

  function handleButtonClick() {
    setSelectedCert({
      ...props,
      id: props.id,
      name: props.name,
      price: props.discountPrice,
    });
    navigate("./contacts");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.name}</h2>
      <p className={styles.main}>Цена {props.price}</p>
      <button onClick={handleButtonClick} className={styles.button}>
        Оформить
      </button>
      <p className={styles.caption}>*со скидкой {props.discountPrice}</p>
    </div>
  );
};
