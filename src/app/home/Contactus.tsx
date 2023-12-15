"use client";
import React, { useState } from "react";
import styles from "./Contactuscss.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

async function addDataToFireStore(
  firstname,
  lastname,
  email,
  phonenumber,
  subject,
  message
) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      subject: subject,
      message: message,
    });
    console.log("Documentation written with id", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document", error);
    return false;
  }
}

const Contactus = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setphoneNumber] = useState("");
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(
      firstname,
      lastname,
      email,
      phonenumber,
      subject,
      message
    );
    if (added) {
      setfirstName("");
      setlastName("");
      setEmail("");
      setphoneNumber("");
      setSubject();
      setMessage("");
      let radio = document.getElementById("subject");
      radio.checked = false;

      alert("Data added to firestore DB!! ");
    }
  };
  return (
    <div id="contactus" className={styles.contactus}>
      <div className={styles.header}>Contact Us</div>
      <div className={styles.lowerheader}>
        Any question or remarks? Just write us a message!
      </div>
      <div className={styles.lower}>
        <div className={styles.left}></div>
        <form className={styles.right} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">FirstName:</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastname">LastName:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phonenumber">Phone Number:</label>
            <input
              type="number"
              id="phonenumber"
              value={phonenumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="radio"
              id="subject"
              value="general inquiry"
              onChange={(e) => setSubject(e.target.value)}
            />
            General inquiry
            <input
              type="radio"
              id="subject"
              value="sponsorship"
              onChange={(e) => setSubject(e.target.value)}
            />
            Sponsorship
            <input
              type="radio"
              id="subject"
              value="got an idea"
              onChange={(e) => setSubject(e.target.value)}
            />
            Got an idea
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              rows={5}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
