import React, { useState, useEffect } from "react";


const PermissionProcess = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  // Simulate backend updates
  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        setStep(3); // simulate backend approval
      }, 3000);
    } else if (step === 3) {
      setTimeout(() => {
        setStep(4); // final grant
      }, 3000);
    }
  }, [step]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setStep(2); // move to step 2 (request sent)
  };

  return (
    <div className="permission-container">
      <h2>Permission Request Process</h2>

      {/* Stepper UI */}
      <div className="steps">
        <div className={`step ${step >= 2 ? "completed" : ""}`}>
          <span>1</span>
          <p>Form Submitted</p>
        </div>
        <div className={`step ${step >= 3 ? "completed" : step === 2 ? "active" : ""}`}>
          <span>2</span>
          <p>Request Review</p>
        </div>
        <div className={`step ${step === 4 ? "completed" : step === 3 ? "active" : ""}`}>
          <span>3</span>
          <p>Permission Granted</p>
        </div>
      </div>

      {/* Step content */}
      {step === 1 && (
        <form onSubmit={handleSubmit} className="permission-form">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Reason for Permission"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            required
          />
          <button type="submit">Submit Request</button>
        </form>
      )}

      {step === 2 && <p className="loading">⏳ Sending request for approval...</p>}
      {step === 3 && <p className="loading">⏳ Request under review...</p>}
      {step === 4 && <p className="success">✅ Permission Granted!</p>}
    </div>
  );
};

export default PermissionProcess;
