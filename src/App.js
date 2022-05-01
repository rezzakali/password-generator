import React, { useState } from "react";
import "./App.css";
import { PasswordService } from "./PasswordService";

function App() {
  const [state, setState] = useState({
    generatedPassword: "",
    passwordLength: "",
    symbols: false,
    numbers: false,
    upper: false,
    lower: false,
  });

  const updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const updateCheckbox = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const submit = (event) => {
    event.preventDefault();
    const passwordObj = PasswordService.getPassword(state);
    const thePassword = PasswordService.generatePassword(
      passwordObj,
      state.passwordLength
    );
    setState({ ...state, generatedPassword: thePassword });
  };
  // copy the password to clipboard
  const copyPassword = () => {
    const copyPass = navigator.clipboard.writeText(state.generatedPassword);
    if (state.generatedPassword !== "") {
      if (copyPass) {
        alert("Password copied");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="mainContainer">
        <div className="contentHeader shadow-lg">
          <h3 className="mb-4">Password Generator</h3>
          <form>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Password
              </label>
              <input
                type="input-group"
                className="form-control"
                name="generatedPassword"
                value={state.generatedPassword}
                onChange={updateInput}
              />
              <span
                className="input-group-text"
                id="copy"
                onClick={copyPassword}
              >
                copy
              </span>
            </div>

            {/* password length start from here */}

            <div className="input-group mb-3">
              <input
                value={state.passwordLength}
                onChange={updateInput}
                name="passwordLength"
                type="number"
                className="form-control"
                placeholder="password length"
              />
              <span className="input-group-text">Length</span>
            </div>

            {/* password length start from here */}

            <div className="input-group mb-3">
              <div className="input-group-text" id="btnGroupAddon">
                <input
                  type="checkbox"
                  name="symbols"
                  onChange={updateCheckbox}
                  className="form-check-input"
                />
              </div>
              <input
                type="input-group"
                className="form-control"
                disabled={true}
                placeholder="Symbols"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-text" id="btnGroupAddon">
                <input
                  type="checkbox"
                  name="numbers"
                  onChange={updateCheckbox}
                  className="form-check-input"
                />
              </div>
              <input
                type="input-group"
                className="form-control"
                disabled={true}
                placeholder="Numbers"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-text" id="btnGroupAddon">
                <input
                  type="checkbox"
                  name="upper"
                  onChange={updateCheckbox}
                  className="form-check-input"
                />
              </div>
              <input
                type="input-group"
                className="form-control"
                disabled={true}
                placeholder="upperCharacters"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-text" id="btnGroupAddon">
                <input
                  type="checkbox"
                  name="lower"
                  onChange={updateCheckbox}
                  className="form-check-input"
                />
              </div>
              <input
                type="input-group"
                className="form-control"
                disabled={true}
                placeholder="lowerCharacters"
              />
            </div>
            <button className="btn btn-primary" onClick={submit}>
              Generate Password
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
