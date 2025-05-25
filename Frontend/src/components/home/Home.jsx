import './Home.css';
import { useState, useEffect } from 'react';
import Image from "/src/assets/doctor1.png";
import Auth from '../auth/Auth';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is already logged in with explicit authentication flag
    const storedUser = localStorage.getItem('currentUser');
    const authFlag = localStorage.getItem('isAuthenticated');
    
    if (storedUser && authFlag === 'true') {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleOpenModal = () => {
    // Check explicit authentication flag
    if (isAuthenticated) {
      setShowModal(true);
    } else {
      setShowAuthModal(true);
    }
  };
  
  const handleCloseModal = () => setShowModal(false);
  
  

 
  
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Data Object:", formData);
  // Example: send to API or next component
  setShowModal(false);
  };
  
  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };
  
  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    
    // Open the checkup modal after successful login
    setTimeout(() => {
      setShowModal(true);
    }, 500);
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
            <h2 className='form-heading'>Medical Checkup Form</h2>
            <form onSubmit={handleSubmit} className="form-grid">

              <div className='essential'>
                {/* Name */}
              <div className='card-data'>
              <label>Name and ID *: 
                <input 
                  
                  name="name" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Name"
                  min="0"
                  step="any" 
                />
              </label><br />
              <label>
         <input 
                  type="numerical" 
                  name="id" 
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
                  type="numerical" 
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
                  type="numerical" 
                  name="Urea Nitrogen" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Urea Nitrogen value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="UreaNitrogen_flag" required onChange={handleChange}>
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
                  type="numerical" 
                  name="Sodium" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Sodium value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="Sodium_flag" required onChange={handleChange}>
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
                  type="numerical" 
                  name="Potassium" 
                  required 
                  onChange={handleChange} 
                  placeholder="Enter Potassium value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="Potassium_flag" required onChange={handleChange}>
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
                  type="numerical" 
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
                  type="numerical" 
                  name="Hemoglobin" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Hemoglobin value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="Hemoglobin_flag" required onChange={handleChange}>
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
                  type="numerical" 
                  name="Hematocrit" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Hematocrit value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="Hematocrit_flag" required onChange={handleChange}>
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
                  type="numerical" 
                  name="Magnesium" 
                  required 
                  onChange={handleChange}
                  placeholder="Enter Magnesium value" 
                  min="0"
                  step="any"
                />
              </label><br />
              <label>
          <select name="Magnesium_flag" required onChange={handleChange}>
            <option value="" disabled selected hidden>--Select--</option>
            <option value="nan">nan</option>
            <option value="abnormal">abnormal</option>
            <option value="delta">delta</option>
          </select>
        </label><br />
               </div>
              </div>

              <div className='non-essential'>
                <div>
                  {/* Admission Type */}
              <label>Admission Type:
                <select name="admission_type" onChange={handleChange}>
                  <option value="" disabled selected hidden>--Select--</option>
                  <option value="ELECTIVE">ELECTIVE</option>
                  <option value="EMERGENCY">EMERGENCY</option>
                  <option value="URGENT">URGENT</option>
                  <option value="NEWBORN">NEWBORN</option>
                </select>
              </label>
                </div>

              {/* Discharge Location */}
              <div>
                <label>Discharge Location:
                <select name="discharge_location" onChange={handleChange}>
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
              <div>
                <label>Insurance:
                <select name="insurance" onChange={handleChange}>
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
              <label>Admit Time: <input type="text" name="admit_time" onChange={handleChange} placeholder="YYYY-MM-DD HH:MM:SS" /></label>
              <label>Discharge Time: <input type="text" name="discharge_time" onChange={handleChange} placeholder="YYYY-MM-DD HH:MM:SS" /></label>

              </div>

              

              {/* Buttons */}
              <div className="modal-buttons">
                <button type="button" onClick={handleCloseModal} className="modal-cancel">Cancel</button>
                <button type="submit" className="modal-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
