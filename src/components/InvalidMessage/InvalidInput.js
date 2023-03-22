import styles from "./InvalidInput.module.css";

const InvalidInput = (props) => {
  console.log(props.invalidMessageBool);

  const clearInvalidMessage = () => {
    props.clearInvalidMessageHandler();
  }
  return (
    <div className={`${styles.pageCover} ${!props.invalidMessageBool && styles.hide}`}>
      <div className={styles.popUp}>
        <div className={styles.header}>
          <span>Invalid input</span>
        </div>
        <div className={styles.text}>
          <span>Please enter a valid name and age (non-empty values).</span>
        </div>
        <div className={styles.button}>
          <button onClick={clearInvalidMessage}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default InvalidInput;
