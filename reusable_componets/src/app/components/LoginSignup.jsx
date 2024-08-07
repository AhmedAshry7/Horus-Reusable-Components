import React from "react";
import { useState } from "react";
import styles from "./LoginSignup.module.css";
import Link from 'next/link';

const LoginSignup = ({islogin,submit, imageSrc, title, redirectPage}) =>{
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};
    if (!name.trim()&&!islogin) {
      newErrors.name = 'Please enter the Username';
    }
    if (!phone.trim()&&!islogin) {
      newErrors.phone = 'Please enter your phone number';
    }
    else if (phone.length!=11&&!islogin) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!email.trim()){
      newErrors.email = 'Please enter your email';
    } 
    else if( !emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    else if (password !== confirmPassword &&!islogin) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        submit();
         setErrors({});
      }
    } catch (error) {
      // Handle registration errors
      console.error('Error registering user:', error.message);
      setErrors({});
    }
  };
  return(
    <div className={styles.page}>
    <div className={styles.mainForm}>
    <div className={styles.head}>
        <img
          src={imageSrc}
          alt="search icon"
          className={styles.HorusIcon}
        />
          <h1 className={styles.headTitle}>{title}</h1>
        </div>

        {!islogin&&(
          <div className={styles.inputcontainer}>
          <p className={styles.title}>Userame</p>
          <input
            type="text"
            placeholder="Username"
            className={styles.inputBox}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className={styles.errors}>{errors.name}</span>}
        </div> 
        )}
           
      <div className={styles.inputcontainer}>
        <p className={styles.title}>Email</p>
        <input
          type="text"
          placeholder="Email"
          className={styles.inputBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className={styles.errors}>{errors.email}</span>}
      </div>

      {!islogin&&(
      <div className={styles.inputcontainer}>
        <p className={styles.title}>Phone number</p>
        <input
          type="text"
          placeholder="Phone number"
          className={styles.inputBox}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span className={styles.errors}>{errors.phone}</span>}
      </div>
    )}

      <div className={styles.inputcontainer}>
        <p className={styles.title}>Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          className={styles.inputBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className={styles.errors}>{errors.password}</span>}
      </div>

      {!islogin&&(
      <div className={styles.inputcontainer}>
        <p className={styles.title}>Confirm Password</p>
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.inputBox}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <span className={styles.errors}>{errors.confirmPassword}</span>
        )}
      </div>
    )}

      <div>
        <button className={styles.submit} onClick={handleSubmit}>
          submit
        </button>
      </div>
      {!islogin&&(
      <span>
        Already have an account?{' '}
        <Link href={redirectPage} className="text-blue-600 hover:text-blue-800 hover:underline">
          Login
        </Link>
      </span>
      )}
      {islogin&&(
      <span>
        Doesn't have an account?{' '}
        <Link href={redirectPage} className="text-blue-600 hover:text-blue-800 hover:underline">
          Signup
        </Link>
      </span>
      )}

    </div>

    </div>
  );
}

export default LoginSignup;