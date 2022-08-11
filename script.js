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