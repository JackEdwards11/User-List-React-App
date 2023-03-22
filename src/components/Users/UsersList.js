import styles from "./UsersList.module.css";
import UsersItem from "./UserItem";

const UsersList = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <ul className={`${styles.userList} ${users.length === 0 && styles.hide}`}>
      {users.map((user) => (
        <UsersItem
          username={user.username}
          age={user.age}
        />
      ))}
    </ul>
  );
};

export default UsersList;
