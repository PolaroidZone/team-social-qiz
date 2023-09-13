import { SetStateAction } from "react";
import RegisterForm from "../components/register/RegisterForm";

interface RegisterProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Register: React.FC<RegisterProps> = ({setPage}: RegisterProps) => {
  return (
    <div className="Form-container">
      <div className="Register-header">
        <h1>Team social typescript</h1>
      </div>
      <RegisterForm setPage={setPage}/>
    </div>
  );
};

export default Register;
