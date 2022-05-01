export class PasswordService {
  static getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  static getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  static getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  static getRandomSymbols() {
    const symbols = "!@#$%^&*()_{}[]+|<>/?";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  static getPassword(state) {
    let passwordObj = {};
    for (let key of Object.keys(state)) {
      if (typeof state[key] === "boolean" && state[key]) {
        passwordObj = {
          ...passwordObj,
          [key]: state[key],
        };
      }
    }
    return passwordObj;
  }
  static generatePassword(passwordObj, passwordLength) {
    let thePassword = "";
    for (
      let i = 0;
      i < Number(passwordLength);
      i += Object.keys(passwordObj).length
    ) {
      if (passwordObj.lower) thePassword += `${this.getRandomLowerCase()}`;
      if (passwordObj.upper) thePassword += `${this.getRandomUpperCase()}`;
      if (passwordObj.symbols) thePassword += `${this.getRandomSymbols()}`;
      if (passwordObj.numbers) thePassword += `${this.getRandomNumbers()}`;
    }
    return thePassword.substring(0, Number(passwordLength));
  }
}
