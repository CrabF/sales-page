import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layout/layout";
import { Card } from "../../components/card/card";
import styles from "./homePage.module.css";

export const HomePage: FC = () => {
  const [state, setState] = useState<any>([]);
  const URL = import.meta.env.VITE_API_URL;

  const requestData = {
    ApiKey: import.meta.env.VITE_API_KEY,
    MethodName: "OSGetGoodList",
  };

  useEffect(() => {
    fetch(`${URL}`, {
      method: "POST",

      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        setState(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className={styles.cards}>
        {state.map((item: any) => (
          <Card
            id={item.ID}
            key={item.ID}
            name={item.NAME}
            price={item.PRICE}
            discountPrice={item.REC_SUM}
          />
        ))}
      </div>
    </Layout>
  );
};
