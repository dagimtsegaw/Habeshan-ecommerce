import React from "react";
import styles from "./Cart.module.css";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h3>Contact Us</h3>
        <p>Phone: +123 456 7890</p>
        <p>Follow us on social media:</p>
        <p>Instagram: @habeshan_store</p>
        <p>Facebook: HabeshanStore</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactModal;
