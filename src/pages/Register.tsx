import RegisterForm from "../components/register/RegisterForm";

import "../styles/Register.css";

interface RegisterProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Register: React.FC<RegisterProps> = ({ setPage }: RegisterProps) => {
  return (
    <div className="Form-container">
      <div className="formBox">
        <div className="Register-header">
          <h1>Team social!</h1>
        </div>
        <RegisterForm setPage={setPage} />
      </div>
    </div>
  );
};

export default Register;
