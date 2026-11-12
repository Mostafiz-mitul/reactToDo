


const multiplyValue = (a: number , b=2) => {
  return a * b
}


console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));


const processInput = (vInput: any) => {
  if (typeof vInput === "string") {
    return vInput.trim();
  } else if (typeof vInput === "number") {
    return vInput * 10;
  } else if ( typeof vInput === "boolean" && vInput === true) {
    return "Active";
  } else if ( typeof vInput === "boolean" && vInput === false) {
    return "Inactive";
  }


  return typeof vInput;
}


console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));



