import styles from "./UserItem.module.css";

const UsersItem = (props) => {

  return <div className={styles.userItem}>
    <p>{props.username} ({props.age} years old)</p>
  </div>;
};

export default UsersItem;
