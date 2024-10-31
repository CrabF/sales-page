import { FC } from "react";
import styles from "./contacts.module.css";
import { Layout } from "../../components/layout/layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCertContext } from "../../components/certContext/certContext";

interface Inputs {
  name: string;
  phone: number;
  email: string;
}

export const Contacts: FC = () => {
  const navigate = useNavigate();
  const { selectedCert } = useCertContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const URL = import.meta.env.VITE_API_URL;

  const requestData = {
    ApiKey: import.meta.env.VITE_API_KEY,
    MethodName: "OSSale",
  };

  const onSubmit = (data: Inputs) => {
    const payload = {
      ...requestData,
      ClientName: data.name,
      Phone: data.phone,
      Email: data.email,
      Summa: selectedCert?.price,
      Id: selectedCert?.id,
    };
    console.log(payload);
    fetch(`${URL}`, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInputs}>
            <label className={styles.formLabel}>
              Имя*
              <input
                required
                className={styles.formInput}
                type="text"
                {...register("name", {
                  required: "Это поле обязательно",
                  minLength: {
                    value: 2,
                    message: "Минимум 2 символа",
                  },
                })}
              />
              {errors?.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </label>
            <label className={styles.formLabel}>
              Телефон*
              <input
                required
                className={styles.formInput}
                type="tel"
                {...register("phone", {
                  required: "Это поле обязательно",
                  pattern: {
                    value: /^\+?[0-9]{10,15}$/,
                    message: "Введите корректный номер телефона",
                  },
                })}
              />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}
            </label>
            <label className={styles.formLabel}>
              Почта*
              <input
                required
                className={styles.formInput}
                type="email"
                {...register("email", {
                  required: "Это поле обязательно",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Введите корректный адрес электронной почты",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </label>
          </div>
          <div>
            <button
              className={styles.button}
              type="button"
              onClick={() => navigate("/")}
            >
              Назад
            </button>
            <button className={styles.button} type="submit">
              Оплатить
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
