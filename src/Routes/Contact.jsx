import React from 'react';
import Form from '../Components/Form';
import { useGlobalContext } from '../Components/utils/GlobalContext';

function Contact() {
  const { theme } = useGlobalContext();

  return (
    <div>
        <div className={`content ${theme}`}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you.</p>
        <Form/>
      </div>
    </div>
  );
}

export default Contact;