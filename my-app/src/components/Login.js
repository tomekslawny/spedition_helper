import React from "react";
import Button from "@material-ui/core/Button";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSignup();
    }
  };

  return (
    <form className="login">
      <div className="loginContainer">
        <label>Nazwa użytkownika</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onKeyPress={handleKeyPress}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Hasło</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <Button variant="contained" color="primary" onClick={handleLogin}>
                Zaloguj
              </Button>
              <p>
                Nie masz konta?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Zarejestruj się
                </span>
              </p>
            </>
          ) : (
            <>
              <Button
                type={"submit"}
                variant="contained"
                color="primary"
                onClick={handleSignup}
                onKeyPress={handleKeyPress}
              >
                Zarejestruj
              </Button>
              <p>
                Masz konto ?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Zaloguj się
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
