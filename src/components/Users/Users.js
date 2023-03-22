import styles from "./Users.module.css";
import UsersList from "./UsersList";

const Users = (props) => {

  return (
    <div className={styles.users}>
      <UsersList users={props.users}/>
    </div>
  );
};

export default Users;
