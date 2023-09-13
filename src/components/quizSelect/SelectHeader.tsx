const Header = () => {
  const user = [localStorage.getItem("user")];
  const userObject = { user };

  return (
    <div className="header">
      <div className="userContainer">
        <h1>{userObject.user}</h1>
      </div>
      <div className="Selectheading">
        <h1>Choose a topic!</h1>
      </div>
    </div>
  );
};

export default Header;
