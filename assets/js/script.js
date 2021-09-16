
/*Plus counter*/
let nodePlus = document.createElement("span");   
nodePlus.className = 'plus';
let textPlus = document.createTextNode("+");         // Create a text node
nodePlus.appendChild(textPlus);                              // Append the text 
document.getElementById("plus-icon").appendChild(nodePlus);    

/*create counter*/
let nodeZero = document.createElement("span");           
nodeZero.className = 'zero';
let textZero = document.createTextNode("0");         // Create a text node
nodeZero.appendChild(textZero);                              // Append the text
document.querySelector('.white-counter').appendChild(nodeZero);    

/*Minus Counter*/
let nodeMinus = document.createElement("span");
nodeMinus.className = 'minus';               
let textMinus = document.createTextNode("-");         // Create a text node
nodeMinus.appendChild(textMinus);                              // Append the text 
document.getElementById("minus-icon").appendChild(nodeMinus);    


document.addEventListener('DOMContentLoaded', function(){


let addCount = document.querySelector('.plus');
addCount.addEventListener('click', addFunc)
let lowerCount = document.querySelector('.minus');
lowerCount.addEventListener('click', lowerFunc)
let resetCount = document.querySelector('.reset');
resetCount.addEventListener('click', resetFunc)

})


let count = 0;
addFunc= () => {
	count++;
	document.querySelector(".zero").innerHTML = count;
};
lowerFunc= () => {
    count--;
	document.querySelector(".zero").innerHTML = count;
}
resetFunc= () => {
    count = 0;
	document.querySelector(".zero").innerHTML = count;
}
