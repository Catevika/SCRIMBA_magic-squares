/*
DESCRIPTION:
In this challenge you are a magician that tells your audience that by pressing only
the first square on the left, you can change ALL 9 squares on the grid to be yellow.
Write a function using the .forEach() method that will do just that.

event listeners, Array work

*/

// Write your code here 👇
const divs = document.querySelectorAll('.container div');
const divsArray = Array.from(divs);

let clickCount = 0;

const changeColor = () => {
	divsArray.forEach((element) => {
		const blueGradient =
			'linear-gradient(to left top, #43ddc7, #00b2bf, #0086a7, #285c81, #2d3553)';
		const pinkGradient =
			'linear-gradient(to right top, #ffb6f2, #d08cc4, #a36397, #783d6d, #4f1846)';

		if (clickCount % 2 === 0) {
			element.style.backgroundImage = `${pinkGradient}`;
		} else {
			element.style.backgroundImage = `${blueGradient}`;
		}
	});
	clickCount += 1;
};

divsArray[0].addEventListener('click', changeColor);

/*

DETAILED INSTRUCTIONS 
1. Use JavaScript to turn elements into an Array
2. Use the .forEach() method to apply a change to all the elements
3. Listen out for when the first square is clicked

STRETCH GOALS:
- What else can you change about the squares?
- Can you improve the overall design?

*/
