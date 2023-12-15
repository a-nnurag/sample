import React from "react";
import styles from "./Eventscss.module.css";

const Events = () => {
  return (
    <div id="events" className={styles.events}>
      <header className={styles.header}>Events</header>
      <div className={styles.eventdetails}>
        <div className={styles.element}>
          <div className={styles.imagecontainer}>
            <img src="/events/i1.jpg" alt="" className={styles.image} />
            image1
          </div>
        </div>
        <div className={styles.element}>
          <div className={styles.imagecontainer}>
            <img src="/events/i2.jpg" alt="" className={styles.image} />
            image2
          </div>
        </div>
        <div className={styles.element}>
          <div className={styles.imagecontainer}>
            <img src="/events/i3.jpg" alt="" className={styles.image} />
            image3
          </div>
        </div>
      </div>
      <button className={styles.button}>Explore</button>
    </div>
  );
};

export default Events;
