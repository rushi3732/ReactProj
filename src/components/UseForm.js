import { useState, useEffect } from 'react';



const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',

  });
  const [errors, setErrors] = useState({});
  const [number] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userList, setUserList] = useState([])

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value

    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  console.log(values);

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;