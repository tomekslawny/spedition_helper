import React, { useState, useEffect } from "react";
import "./App.css";
import Fire from "./Fire";
import Login from "./Login";
import Hero from "./Hero";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { plPL } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#794B01",
      },
      secondary: {
        main: "#fb8500",
      },
    },
  },
  plPL
);

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setEmailError("Nie znaleziono użytkownika");
            break;
          case "auth/user-disabled":
            setEmailError("Użytkownik nieaktywny");
            break;
          case "auth/user-not-found":
            setEmailError("Nie znaleziono użytkownika");
            break;
          case "auth/wrong-password":
            setPasswordError("Niepoprawne hasło");
            break;
          default:
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    Fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            setEmailError("E-mail już w użyciu");
            break;
          case "auth/invalid-email":
            setEmailError("Niepoprawny e-mail");
            break;
          case "auth/weak-password":
            setPasswordError("Hasło za słabe (co najmniej 6 symboli)");
            break;
          default:
        }
      });
  };

  useEffect(() => {
    const authListener = () => {
      Fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };
    authListener();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        {user ? (
          <>
            <Hero />
          </>
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </div>
    </MuiThemeProvider>
  );
};

export default App;
