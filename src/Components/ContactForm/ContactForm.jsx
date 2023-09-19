import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const OnSubmit = (event) => {
    event.preventDefault();

    console.log("Name",event.target[0].value);
    console.log("Email",event.target[1].value);
    console.log("Text",event.target[2].value);
  };

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24" />} />
        </div>
        <Button
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24" />}
        />

        <form onSubmit={OnSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/main_photo.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
