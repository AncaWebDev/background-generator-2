var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient-background");

body.style.background = "red"

//STEP 1

//linear-gradient(to right, red, yellow)

// color1.addEventListener("input", function(){
// 	//console.log(color1.value);
// 	body.style.background = "linear-gradient(to right, "
// 							 + color1.value 
// 							 + ", " 
// 							 + color2.value 
// 							 + ")"
// })

// color2.addEventListener("input", function(){
// 	//console.log(color2.value);
// 	body.style.background = "linear-gradient(to right, "
// 							 + color1.value 
// 							 + ", " 
// 							 + color2.value 
// 							 + ")"
// })


//STEP 2

function setBackground(){
	body.style.background = "linear-gradient(to right, "
							 + color1.value 
							 + ", " 
							 + color2.value 
							 + ")"
	css.textContent = body.style.background;						 
}

color1.addEventListener("input", setBackground)

color2.addEventListener("input", setBackground)
