import React from "react";
import { useState } from "react";
import styles from "./UploadForm.module.css";

const UploadForm = ({submit}) =>{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Please enter the Title';
    }
    if (!description.trim()) {
      newErrors.description = 'Please enter the description';
    }
    
    if (!location.trim()){
      newErrors.location = 'Please enter the location';
    } 
/*     if (price==0) {
      newErrors.price = 'Please enter the price';
    } */
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
      console.error('Error submitting:', error.message);
      setErrors({});
    }
  };
  return(
    <div className={styles.page}>
    <div className={styles.mainForm}>

          <div className={styles.inputcontainer}>
          <p className={styles.title}>Title</p>
          <input
            type="text"
            placeholder="Please enter the title"
            className={styles.inputBox}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className={styles.errors}>{errors.title}</span>}
        </div> 
           
      <div className={styles.inputcontainer}>
        <p className={styles.title}>Description</p>
        <textarea
          placeholder="Please enter the description"
          className={styles.inputBoxs}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <span className={styles.errors}>{errors.description}</span>}
      </div>

      <div className={styles.inputcontainer}>
        <p className={styles.title}>Location</p>
        <input
          type="text"
          placeholder="Please enter the location"
          className={styles.inputBox}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {errors.location && <span className={styles.errors}>{errors.location}</span>}
      </div>

      <div className={styles.inputcontainer}>
        <p className={styles.title}>Price</p>
        <input
          type="number"
          placeholder="Please enter the price"
          className={styles.inputBox}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <span className={styles.errors}>{errors.price}</span>}
      </div>


      <div>
        <button className={styles.submit} onClick={handleSubmit}>
          submit
        </button>
      </div>

    </div>

    </div>
  );
}

export default UploadForm;