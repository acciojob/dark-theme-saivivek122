//your code here
let button=document.getElementById("swap")
let app=document.getElementById("app")
button.addEventListener("click",swapTheme)
function swapTheme(){
	if(app.classList.contains("day")){
		app.classList.remove("day")
		app.classList.add("night")
		button.classList.remove("button_day")
		button.classList.add("button_night")
	}
	else{
		app.classList.remove("night")
		app.classList.add("day")
		button.classList.remove("button_night")
		button.classList.add("button_day")
	}
}

