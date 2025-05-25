import Imagebrief from "/src/assets/doctor2.png"
import "./Brief.css";


const Brief = () => {
  return (
   <div className="brief-container" id="Brief">
    <h1 className="brief-heading">Breif on Model</h1>
    <div className="brief-sub-container">
      <div className="image-brief">
      <img src ={Imagebrief} alt="Image"/>
    </div>
    <div className="text-brief">
      <div className="text-item" title="text-item-1">
        <h3 id="first">Risk Consideration</h3>
        <p id="first-para">Misclassifying a high-risk patient can be fatal. However, a false positive only leads to extra monitoring, which is far less costly. Hence, we adjusted the model to prioritize recall over precision.</p>
      </div>
      <div className="text-item" title="text-item-2">
        <h3>Model Metrics</h3>
        <p> We selected the Random Forest model for its robustness in handling missing values, managing complex healthcare data, and reducing overfitting, ensuring reliable and accurate predictions. </p>
      </div>
      <div className="text-item" title="text-item-3">
        <h3>Data Used</h3>
        <p>Clinical data from selected MIMIC-III tables.Focused on heart failure ICD-9 codes (e.g., 4280, 42821.In-depth exploratory data analysis for feature selection and modeling.</p>
      </div>
      <div className="text-item" title="text-item-4">
        <h3>Impact</h3>
        <p>Efficient resource allocation.Proactive monitoring of high-risk patients.Reduced 30-day readmission rates.\nImproved overall patient outcomes.</p>
      </div>
    </div>
    </div>
   </div>
  );
};



export default Brief;
