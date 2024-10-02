import { useState } from 'react';

const initialFormData = {
  firstName: '',
  email: '',
  age: 0
};

function MyForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const message = 'Thanks, ' + formData.firstName + ' ' + formData.age;

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <>
      {isSubmitted ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} /> <br />
          <input type="email" name="email" onChange={handleChange} value={formData.email} /> <br />
          <input type="number" name="age" onChange={handleChange} value={formData.age} /> <br />
          <button type="submit">Submit</button>
        </form >
      )}
    </>
  );
}

export default MyForm;
