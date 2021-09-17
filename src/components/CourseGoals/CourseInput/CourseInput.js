import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
      <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* Below was done with inline style*/}
        {/* <label style={{color: isValid ? 'black' : 'red'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{borderColor: isValid ? 'black' : 'red', background: isValid ? 'transparent' : 'salmon'}} /> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
