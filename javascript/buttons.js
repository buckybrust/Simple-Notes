var crossButton = document.getElementById("crossbutton");
var colorButton = document.getElementById("colorbutton")
var activebutton = "";
var activeColor = "blue";

//Selects and Deselects The Cross Button As Active
function clickButton(name, elmnt) {
	if (elmnt.classList.contains("activebutton") == false) {
		clearActiveButtons();
		activebutton = name;
		elmnt.classList.add("activebutton");
	}else{
		clearActiveButtons();
	}
}


//Sets Color Active
function activateColor(color, elmnt) {
	clearActiveButtons();
	activeColor = color;
	activebutton = "color";
	console.log(document.getElementById("colordisplay"))
	
	//Checks If Color Is Clear And Sets The Display Color
	if(activeColor == "clear"){
		document.getElementById("colordisplay").style.backgroundColor = "white"
	}else{
	document.getElementById("colordisplay").style.backgroundColor = activeColor;
	}
	
	document.getElementById("colormenubutton").classList.add("activebutton")
	elmnt.classList.add("activecolor");
	document.getElementById("colormenu").style.visibility = "hidden";
}


//Clears The Current Active Button To Simplify Choosing Things.
function clearActiveButtons() {
	while (document.getElementsByClassName("activebutton").length >= 1) {
		document.getElementsByClassName("activebutton")[0].classList.remove("activebutton");
	}
	while (document.getElementsByClassName("activecolor").length >= 1) {
		document.getElementsByClassName("activecolor")[0].classList.remove("activecolor")
	}
	activebutton = "";
}


//Applies Styles To Notes On Click
function noteClick(noteP) {
	if (activebutton != "") {

		var idNum = noteP.parentElement.id.slice(4)
		var curAttribute = attributeList[noteP.parentElement.id.slice(4)]
		
		
		//If The Button Was Crossout
		if (activebutton == "cross") {
			if (noteP.classList.contains("crossed") == false) {
				attributeList[idNum] = "y" + curAttribute.slice(1)
			} else {
				attributeList[idNum] = "n" + curAttribute.slice(1)
			}
			generateList(list);


			//If The Button Was Bold
		}else if (activebutton == "bold") {
			if (noteP.classList.contains("bold") == false) {
				attributeList[idNum] = curAttribute.slice(0,2) + "y" + curAttribute.slice(3);
			} else {
				attributeList[idNum] = curAttribute.slice(0,2) + "n" + curAttribute.slice(3);
			}
			generateList(list);


			//If The Button Was Italic
		}else if (activebutton == "italic") {
			if (noteP.classList.contains("italic") == false) {
				attributeList[idNum] = curAttribute.slice(0,3) + "y" + curAttribute.slice(4);
			} else {
				attributeList[idNum] = curAttribute.slice(0,3) + "n" + curAttribute.slice(4);
			}
			generateList(list);


			//If The Button Was A Color
		} else if (activebutton == "color") {
			attributeList[idNum] = attributeList[idNum].slice(0, 1) + "" + ColorToNumber(activeColor);
			console.log(attributeList[idNum])
			generateList(list);
		}
	}

}

//Translates Color# To Color Name
function NumberToColor(num) {
	if (num == 0) {
		return "clear"
	} else if (num == 1) {
		return "lightblue"
	} else if (num == 2) {
		return "indianred"
	} else if (num == 3) {
		return "yellow"
	} else if (num == 4) {
		return "lightgreen"
	} else if (num == 5) {
		return "mediumpurple"
	} else if (num == 6) {
		return "orange"
	} else if (num == 7) {
		return "orchid"
	}
}

//Translates Color Name To Color #
function ColorToNumber(color) {
	if (color == "clear") {
		return 0;
	} else if (color == "lightblue") {
		return 1;
	} else if (color == "indianred") {
		return 2;
	} else if (color == "yellow") {
		return 3;
	} else if (color == "lightgreen") {
		return 4;
	} else if (color == "mediumpurple") {
		return 5;
	} else if (color == "orange") {
		return 6;
	} else if (color == "orchid") {
		return 7;
	}
}

//Makes The Color Menu Visible Or Invisible
function openColorMenu() {
	var colorMenu = document.getElementById("colormenu");
	if (colorMenu.style.visibility == "visible") {
		colorMenu.style.visibility = "hidden";
	} else {
		document.getElementById("colormenu").style.visibility = "visible"
		console.log("show menu")
	}
}



loadArray();
