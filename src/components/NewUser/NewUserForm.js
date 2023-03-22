import { useState } from 'react';
import styles from './NewUserForm.module.css';

const NewUserForm = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    // const [isAgeValid, setIsAgeValid] = useState(false);

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
        
    }
    const ageChangeHandler = (event) => {
        if (!isNaN(+event.target.value)) {
            setEnteredAge(event.target.value);
        }
        // if (isNaN(+event.target.value)) {
        //     setIsAgeValid(false);
        // }
        // else {
        //     setEnteredAge(event.target.value);
        //     setIsAgeValid(true);
        // }
        
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.length > 0 && enteredAge.length > 0) {
            const userData = {
                username: enteredUserName,
                age: +enteredAge
            };
            setEnteredAge('');
            setEnteredUserName('');
            console.log(userData);
            props.showInvalidMessage(false);
            props.onSaveUserData(userData);
        }
        else {
            // SHOW INVALID INPUT MESSAGE
            props.showInvalidMessage(true);
        }
        
    }
    // console.log(+enteredAge);
    // console.log(+enteredAge == NaN);
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label className={styles.label}>Username</label>
            <input className={styles.input} type="text" value={enteredUserName} onChange={userNameChangeHandler}></input>
            <label className={styles.label}>Age (Years)</label>
            <input className={styles.input} type="text" min='0' step='1' value={enteredAge} onChange={ageChangeHandler}></input>
            <button className={styles.button} type="submit">Add User</button>
        </form>
    );
};

export default NewUserForm;

// className={{isAgeValid ? '' : styles.inputError}}