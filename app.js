// Basic operations
function add (a, b)
{
  return a + b;
}
function subtract (a, b)
{
  return a - b;
}
function multiply (a, b)
{
  return a * b;
}
function divide (a, b)
{
  return a / b;
}

function operate(a, b, oper)
{
  switch (oper)
  {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case 'x':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
  }
}

let firstNumberInsertion = false;
let valueOne = -1, valueTwo = -1;
let oper = '';
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const buttons = document.querySelectorAll("button");

let color = '';

// adding a visual clicking effect
buttons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    color = e.target.style.backgroundColor;
    e.target.style.backgroundColor = "lightgray";
  });
});
buttons.forEach((button) => {
  button.addEventListener("mouseup", (e) => {
    e.target.style.backgroundColor = color;
  });
});

// when a number gets clicked
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    // If opr is not selected or it's not the first number insertion
    if (oper === '' || !firstNumberInsertion)
    {
      // if display text === 0
      if(+display.innerText === 0)
        // empty display
        display.innerText = "";
      // display += button's value
      display.innerText += e.target.innerText;
    }
    // If opr is selected and it's the first number insertion after clicking operation
    if (oper !== '' && firstNumberInsertion)
    {
      // display = number pressed
      display.innerText = e.target.innerText;
      firstNumberInsertion = false;
    }
    });
});
  
// when an operation gets clicked
operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    // if valueOne is not known
    if (valueOne === -1)
    {
      // oper = button clicked
      oper = e.target.innerText;
      // valueOne = displaytext
      valueOne = +display.innerText;
      // firstnumberinsertion = true
      firstNumberInsertion = true;
    }
    // if valueOne is known
    else
    {
      // valueTwo = display text
      valueTwo = +display.innerText;
      // result = operate(valueOne, valueTwo, oper)
      result = Math.round(operate(valueOne, valueTwo, oper) * 100) / 100;
      // display result
      display.innerText = result;
      // Valueone = result
      valueOne = +result;
      // reset valueTwo 
      valueTwo = -1;
      // oper = button clicked
      oper = e.target.innerText;
      // firstnumberinsertion = true
      firstNumberInsertion = true;
    }
  });
});
  

// when equal gets clicked
equal.addEventListener("click", () => {
  // if oper and valueOne are selected
  if (oper !== '' && valueOne > -1)
  {
    // value two = display text
    valueTwo = +display.innerText;
    // display = oper(valueOne, valueTwo, oper)
    display.innerText = Math.round(operate(valueOne, valueTwo, oper) * 100) / 100;
    // make firstnumberinsertion true
    firstNumberInsertion = true;
  }
});
  
// when clear gets clicked
clear.addEventListener("click", () =>{
  // reset display
  display.innerText = '0';
  // reset valueOne, valueTwo, oper and first Number insertion
  valueOne = -1;
  valueTwo = -1;
  oper = '';
  firstNumberInsertion = false;
});
  