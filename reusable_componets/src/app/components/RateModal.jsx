import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import styles from "./RateModal.module.css";

const RateModal =(deactiviate,submit)=>{
  const [review,setReview]=useState("");
  const [rating,setRating]=useState(null);
  const [rateColor,setRateColor]=useState(0);
  const [errors, setErrors] = useState({});

return(
  <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.Xbutton} onClick={() => {deactiviate()}}>X</button>
            <h2 className={styles.title}>Review</h2>
            <p>Thank you for sharing your experience</p>
            <textarea placeholder={"please enter your review here"} 
            className={styles.inputbox} 
            value={review}
            onChange={(e) => setReview(e.target.value)} 
            />
            <div className={styles.starsContainer}>
                {[...Array(5)].map((star, index) => {
                  const currentRate=index+1;
                  return (
                    <>
                    <label>
                      <input type="radio" value={currentRate} className={styles.radioInput} onClick={()=>setRating(currentRate)} name="rate"></input>
                      <FaStar color={currentRate<=(rateColor || rating) ? "yellow" : "grey"} size={50} />
                    </label>
                    </>
                  );
                })}
            </div>
            <div className={styles.modalButtons}>
              <button 
                className={styles.cancelButton} 
                data-testid="cancelmodal" 
                onClick={() => {deactiviate()}}
              >
                Cancel
              </button>
              <button className={styles.submitButton} onClick={submit}>submit</button>
            </div>
          </div>
  </div>
)
}
export default RateModal;