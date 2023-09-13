import React, { useState } from "react";
import User from "../../constants/User";
import QuizData from "../../data/QuizData.json";
import UserData from "../../data/UserData.json";

interface FormProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

interface e {
  preventDefault(): unknown;
  target: {
    name: string;
    value: string;
  };
}

const RegisterForm: React.FC<FormProps> = ({ setPage }: FormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createNewUser = () => {
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    const user = { ...User };
    user.name = name;
    user.email = email;
    user.password = password;

    return user;
  };

  function handleSubMit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(formData);

    const userObject = createNewUser();
    console.log(userObject);
    
    const user = [userObject];
    localStorage.setItem("user", JSON.stringify(user));
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
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Enter</button>
    </form>
  );
};

export default RegisterForm;
