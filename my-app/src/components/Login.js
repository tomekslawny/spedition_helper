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

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Nazwa użytkownika</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
                variant="contained"
                color="primary"
                onClick={handleSignup}
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
    </section>
  );
};

export default Login;
