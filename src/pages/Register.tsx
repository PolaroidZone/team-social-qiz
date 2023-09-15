import RegisterForm from "../components/register/RegisterForm";
import Stage from "../constants/Appstage";

import '../styles/Register.css'

type RegisterProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const Register: React.FC<RegisterProps> = ({ setPage }) => {
  function handlePageChange() {
    setPage(Stage.topic);
  }
  return (
    <div className="Form-container">
      <div className="formBox">
        <div className="Register-header">
          <h1>Team social!</h1>
        </div>
        <RegisterForm handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Register;
