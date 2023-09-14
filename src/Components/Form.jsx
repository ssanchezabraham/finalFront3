import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullNameError: '',
    emailError: '',
    submitError: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      fullNameError: '',
      emailError: '',
      submitError: '',
    };

    if (formData.fullName.length <= 5) {
      isValid = false;
      errors.fullNameError = 'The full name must be more than 5 characters.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      isValid = false;
      errors.emailError = 'The email format is not valid.';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Data sent:', formData);
      const successMessage = `Thank you ${formData.fullName}, we will contact you as soon as possible via email.`;
      setFormData({ fullName: '', email: '' });
      setFormErrors({ ...formErrors, submitError: '', successMessage });
      setIsSubmitted(true);
    } else {
      setFormErrors({ ...formErrors, submitError: 'Please verify your information again.' });
    }
  };

  return (
    <div>
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
            />
            <p className="error">{formErrors.fullNameError}</p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <p className="error">{formErrors.emailError}</p>
          </div>
          <button type="submit" className="form-submit-button">Submit</button>
        </form>
      )}
      {formErrors.submitError && (
        <p className="error">{formErrors.submitError}</p>
      )}
      {formErrors.successMessage && (
        <p className="success">{formErrors.successMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;