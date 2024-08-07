import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import styles from "./RateModal.module.css";

const RateModal =({deactiviate,submit})=>{
  const [review,setReview]=useState("");
  const [rating,setRating]=useState(0);
  const [rateColor,setRateColor]=useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (rating===0) {
      newErrors.rating = 'Please rate';
    }
    if (review==="") {
      newErrors.review = 'Please enter your review';
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
  <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.Xbutton} onClick={deactiviate}>X</button>
            <h2 className={styles.title}>Review</h2>
            <p>Thank you for sharing your experience</p>
            <textarea placeholder={"please enter your review here"} 
            className={styles.inputbox} 
            value={review}
            onChange={(e) => setReview(e.target.value)} 
            />
            {errors.review && <span className={styles.errorMessage}>{errors.review}</span>}
            <div className={styles.starsContainer}>
                {[...Array(5)].map((star, index) => {
                  const currentRate=index+1;
                  return (
                    <>
                    <label>
                      <input type="radio" value={currentRate} className={styles.radioInput} onClick={()=>setRating(currentRate)} name="rate"></input>
                      <FaStar color={currentRate<=(rateColor || rating) ? "yellow" : "grey"} size={40} />
                    </label>
                    </>
                  );
                })}
            </div>
            {errors.rating && <span className={styles.errorMessage}>{errors.rating}</span>}
            <div className={styles.modalButtons}>
              <button 
                className={styles.cancelButton} 
                data-testid="cancelmodal" 
                onClick={deactiviate}
              >
                Cancel
              </button>
              <button className={styles.submitButton} onClick={handleSubmit}>submit</button>
            </div>
          </div>
  </div>
)
}
export default RateModal;