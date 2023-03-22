import styles from "./NewUser.module.css";
import NewUserForm from "./NewUserForm";


const NewUser = (props) => {
  const saveNewUserHandler = (userData) => {
    props.newUserDataHandler(userData);
  }

  const inValidData = (showMessage) => {
    props.inValidMessage(showMessage);
  }

  return <div className={styles.newUser}>
    <NewUserForm onSaveUserData={saveNewUserHandler} showInvalidMessage={inValidData}/>
  </div>;
};

export default NewUser;
