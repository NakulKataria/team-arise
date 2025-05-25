import './Home.css';
import { useState } from 'react';
import Image from "/src/assets/doctor1.png";
import Auth from '../auth/Auth';
import { useAuth } from '../../context/AuthContext';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const { currentUser, isAuthenticated } = useAuth();
  
  const handleOpenModal = () => {
    // Check authentication status from context
    if (isAuthenticated) {
      setShowModal(true);
    } else {
      setShowAuthModal(true);
    }
  };
  
  const handleCloseModal = () => setShowModal(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For numerical inputs, ensure only valid floating-point numbers are accepted
    if (e.target.type === "number" && value !== "") {
      // Allow empty string, digits, a single decimal point, and prevent multiple decimal points
      const isValid = /^-?\d*\.?\d*$/.test(value);
      if (!isValid) return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData)
    // fetch("https://heart-failure-predictor-production-8618.up.railway.app/predict", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   console.log("Prediction:", data);
    //   setPrediction(data);
    //   setShowModal(false);
    //   setShowResultModal(true);
    // })
    // .catch(error => {
    //   console.error("Error:", error);
    //   alert("An error occurred while making the prediction. Please try again.");
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
  };
  
  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };
  
  const handleLogin = () => {
    // Close the auth modal after login is handled by the Auth component
    setShowAuthModal(false);
    
    // Open the checkup modal after successful login
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const handleCloseResultModal = () => {
    setShowResultModal(false);
    setPrediction(null);
  };

  return (
    <>
      <div className='container'id="Home">
        {/* Left Content */}
        <div className="left-content"> 
          <h1>Checkout for a better future</h1>
          <p>
            A simple check can reveal life-saving information. Early detection often makes the difference between manageable and serious outcomes...
          </p>
          <button className="check-btn" onClick={handleOpenModal}>CHECK UP NOW</button>
        </div>

        {/* Right Image */}
        <div className="image">
          <img src={Image} alt='Doctor' id='image1'/>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <Auth 
          isOpen={showAuthModal} 
          onClose={handleCloseAuthModal} 
          onLogin={handleLogin} 
        />
      )}
      
      {/* Checkup Modal */}
      {showModal && isAuthenticated && (
        <div className="modal-overlay">
          <div className="modal-content large-form">
            <button className="close-modal-btn" onClick={handleCloseModal}>&times;</button>
            <h2 className='form-heading'>Medical Checkup Form</h2>
            <form onSubmit={handleSubmit} id="checkup-form" className="form-grid">

              <div className='essential'>
                {/* Name */}
              <div className='card-data'>
              <label>Name and ID *: 
                <input 
                  name="patient_name" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
              </label><br />
              <label>
                <input 
                  type="number" 
                  name="patient_id" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter ID"
                  min="0"
                  step="any" 
                />
              </label><br />
              </div>

               {/* Creatinine */}
              <div className='card-data'>
              <label>Creatinine *: 
                <input 
                  type="number" 
                  name="creatinine" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter creatinine value"
                  min="0"
                  step="any" 
                />
              </label><br />
              <label>
          <select name="creatinine_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
              </div>
  

               {/* Urea Nitrogen */}
              <div className='card-data'>
                <label>Urea Nitrogen *: 
                <input 
                  type="number" 
                  name="urea_nitrogen" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Urea Nitrogen value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="urea_nitrogen_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
              </div>

               {/* Sodium */}
              <div className='card-data'>
                <label>Sodium *: 
                <input 
                  type="number" 
                  name="Sodium" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Sodium value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="sodium_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
              </div>


               {/* potassium*/}
              <div className='card-data'>
                <label>Potassium *: 
                <input 
                  type="number" 
                  name="potassium" 
                  required 
                  onChange={handleChange} 
                  placeholder="Enter Potassium value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="potassium_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
              </div>

               {/* albumin*/}
              <div className='card-data'>
                <label>Albumin *: 
                <input 
                  type="number" 
                  name="albumin" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter albumin value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="albumin_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
              </div>

               

               {/* Hemoglobin */}
              <div className='card-data'>
                <label>Hemoglobin *: 
                <input 
                  type="number" 
                  name="hemoglobin" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Hemoglobin value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="hemoglobin_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
              </div>

               {/* Hematocrit */}
              <div className='card-data'>
                <label>Hematocrit *: 
                <input 
                  type="number" 
                  name="hematocrit" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Hematocrit value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="hematocrit_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
              </div>

               {/*Magnesium */}
               <div className='card-data'>
              <label>Magnesium *: 
                <input 
                  type="number" 
                  name="magnesium" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Magnesium value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="magnesium_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
               </div>
              </div>

              <div className='non-essential'>
                <h3 className='section-heading'>Additional Information</h3>
                <div className='card-data'>
                  {/* Admission Type */}
                  <label>Admission Type:
                    <select name="admission_type" required  onChange={handleChange}>
                      <option value="" disabled selected hidden>--Select--</option>
                      <option value="ELECTIVE">ELECTIVE</option>
                      <option value="EMERGENCY">EMERGENCY</option>
                      <option value="URGENT">URGENT</option>
                      <option value="NEWBORN">NEWBORN</option>
                    </select>
                  </label>
                </div>

                {/* Discharge Location */}
                <div className='card-data'>
                  <label>Discharge Location:
                    <select name="discharge_location" required  onChange={handleChange}>
                      <option value="" disabled selected hidden>--Select--</option>
                      <option value="HOME">HOME</option>
                      <option value="HOME HEALTH CARE">HOME HEALTH CARE</option>
                      <option value="SNF">SNF</option>
                      <option value="SHORT TERM HOSPITAL">SHORT TERM HOSPITAL</option>
                      <option value="REHAB/DISTINCT PART HOSP">REHAB/DISTINCT PART HOSP</option>
                      <option value="OTHER FACILITY">OTHER FACILITY</option>
                    </select>
                  </label>
                </div>

                {/* Insurance */}
                <div className='card-data'>
                  <label>Insurance:
                    <select name="insurance" required  onChange={handleChange}>
                      <option value="" disabled selected hidden>--Select--</option>
                      <option value="Private">Private</option>
                      <option value="Self Pay">Self Pay</option>
                      <option value="Medicare">Medicare</option>
                      <option value="Medicaid">Medicaid</option>
                      <option value="Government">Government</option>
                    </select>
                  </label>
                </div>

                
                
                {/* Date/Time */}
                <div className='card-data'>
                  <label>Admit Date and Time:
                    <input 
                      type="datetime-local" 
                      name="admit_time" 
                      required 
                      placeholder='     YYYY-MM-DD    '
                      onChange={handleChange}
                    />
                  </label>
                </div>
                
                <div className='card-data'>
                  <label>Discharge Date and Time:
                    <input 
                      type="datetime-local" 
                      name="discharge_time" 
                      required 
                      placeholder='     YYYY-MM-DD    '
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              

              {/* Buttons */}
              <div className="modal-buttons">
                <button type="button" className="modal-cancel" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="modal-submit" form="checkup-form" disabled={loading}>
                  {loading ? 'Processing...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Result Modal */}
      {showResultModal && prediction && (
        <div className="modal-overlay">
          <div className="modal-content result-modal">
            <button className="close-modal-btn" onClick={handleCloseResultModal}>&times;</button>
            <h2 className='form-heading'>Prediction Result</h2>
            
            <div className="result-container">
              <div className={`result-card ${prediction.prediction === "Yes" ? "risk" : "no-risk"}`}>
                <h3>Heart Failure Risk:</h3>
                <div className="prediction-result">
                  {prediction.prediction === "Yes" ? (
                    <>
                      <span className="risk-indicator high">High Risk</span>
                      <p>Our analysis indicates a potential risk of heart failure. We recommend consulting with a healthcare professional as soon as possible.</p>
                    </>
                  ) : (
                    <>
                      <span className="risk-indicator low">Low Risk</span>
                      <p>Based on the provided information, the risk of heart failure appears to be low. Continue with regular health check-ups.</p>
                    </>
                  )}
                </div>
              </div>
              
              <div className="next-steps">
                <h3>Recommended Next Steps:</h3>
                <ul>
                  {prediction.prediction === "Yes" ? (
                    <>
                      <li>Schedule an appointment with a cardiologist</li>
                      <li>Continue monitoring your vital signs</li>
                      <li>Follow a heart-healthy diet and exercise regimen</li>
                      <li>Take prescribed medications as directed</li>
                    </>
                  ) : (
                    <>
                      <li>Maintain a healthy lifestyle</li>
                      <li>Continue regular check-ups</li>
                      <li>Stay active and maintain a balanced diet</li>
                      <li>Monitor your health parameters periodically</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            
            <div className="modal-buttons">
              <button type="button" className="modal-submit" onClick={handleCloseResultModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
