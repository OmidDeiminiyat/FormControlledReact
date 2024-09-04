import React, { useState } from 'react';
import style from './FormController.module.scss';

const FormValidation = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    if (value.length <= 1 || value.length >= 6) {
      return `${name} must be more than 1 and less than 6 letters`;
    }
    return '';
  };

  const handleChange = (e) => {
    console.log(e);
    
    const { name, value } = e.target;

    let error = validateInput(name, value);

    if (name === 'input1') {
      setInput1(value);
    } else if (name === 'input2') {
      setInput2(value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error1 = validateInput('Input 1', input1);
    const error2 = validateInput('Input 2', input2);

    if (error1 || error2) {
      setErrors({
        input1: error1,
        input2: error2,
      });
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form} >
      <div>
        <label>Input 1:</label><br />
        <input type="text" name="input1" value={input1} onChange={handleChange}
        />
        {errors.input1 && <p style={{ color: 'red' }}>{errors.input1}</p>}
      </div>
      <div>
        <label>Input 2:</label><br />
        <input type="text" name="input2" value={input2}  onChange={handleChange}  />
        {errors.input2 && <p style={{ color: 'red' }}>{errors.input2}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
