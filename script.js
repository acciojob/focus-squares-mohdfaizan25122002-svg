//your JS code here. If required.
let square=document.querySelectorAll(".sqaure")

for(let  box of squares){
	box.addEventListener("mouseenter" , hover);
	box.addEventListener("mouseleave" , reset);
}
function hover(event){
	for(let box of squares){
       if(box !== event.target){
           box.style.backgroundColor="#6F4E37"
	   }
		else{
			box.style.backgroundColor="#E6E6FA"
		}
	}

}

function reset(){
	for(let box  of square){
		box.style.backgroundColor="#E6E6FA"
	}
}