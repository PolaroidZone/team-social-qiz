import React, { useState } from "react";

type FormProps = {
  handlePageChange: () => void;
};

interface e {
  preventDefault(): unknown;
  target: {
    name: string;
    value: string;
  };
}

const RegisterForm: React.FC<FormProps> = ({ handlePageChange }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e: e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  function handleSubMit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(formData);

    localStorage.setItem('user', JSON.stringify(formData.name));

    handlePageChange()
  }

  return (
    <form onSubmit={handleSubMit}>
      <div className="forminput">
        <input
          type="text"
          id="username"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
      </div>
      <button type="submit">Enter</button>
    </form>
  );
};

export default RegisterForm;
