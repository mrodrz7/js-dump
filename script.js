// creates variable 'button'
// value is the 'button' element in the document object (HTML file)
const button = document.querySelector('button');

// a function that requires input from user through a prompt
// once user creates input, an alert with a new message appears
function greet() {
    const name = prompt('What\'s your name friend?');
    alert(`Hello ${name}, welcome to this random page of JS tidbits!`);
};

// chains an event listener to variable 'button'
// when user clicks button, the greet function runs
button.addEventListener('click', greet);
// End

//Background Color changer

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// ^^ generating hex color value example: #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//The event will be background color changing based on a random hex code that becomes generated
btn.addEventListener('click', function(){ //The event listener is waiting for a click on the ID #btn then will execute a function.
  let hexColor = '#'; 
  for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// this function generates a random hex code based on the hex array created
function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}
//End

//Number counter script start
let add = document.querySelector('#add')//attaches variable to button with id of add
let subtract = document.querySelector('#subtract')//attaches variable to button with id of subtract
let reset = document.querySelector('#reset')//attaches variable to button with id of reset

add.addEventListener('click', function(){ //tells the program to listen for the click before executing function
    let output = document.querySelector('#output'); //the tag with the id of output will be called
    let result = Number(output.innerText) + 1; //lets the program know to increase output by 1 upon execution

    output.innerText = result;
});

subtract.addEventListener('click', function(){//tells the program to listen for the click before executing function
    let output = document.querySelector('#output');//the tag with the id of output will be called
    let result = Number(output.innerText) - 1;//lets the program know to decrease output by 1 upon execution

    output.innerText = result;
});

reset.addEventListener('click', function(){//tells the program to listen for the click before executing function
    let output = document.querySelector('#output');//the tag with the id of output will be called
    let result = 0; //resets output value back to 0

    output.innerText = result; 
});
//End
