//Global Variables
var notebox = document.getElementById("notebox");

//This Is The List That Keeps Track of Notes
var list = [];


//Creates a Note Using The Input Text
function createNote() {
	var input = document.getElementById("input").value;
	//Clear Input Text Box
	document.getElementById("input").value = "";
	//Checks If Input Is Valid
	if (validateInput(input) == true) {
		//Adds Input To Front Of List
		list.unshift(input);
		//Generate List
		generateList(list);
	}
}

//validates the input
function validateInput(input) {
	if (input != null && input != "" && input != undefined && input.includes("<") == false && input.includes(">") == false && input.includes("+") == false) {
		return true;
	} else {
		alert("Please Put An Actual Note In The Submit Box.")
		return false;
	}
}



//Removes the Selected Note From The List Then Calls On Generation
function deleteNote(elmnt) {
	var note = elmnt.parentElement;
	var noteValue = note.firstChild.innerHTML;
	var i = 0;
	note.classList.add("deleted")
	note.innerHTML = ""
	window.setTimeout(removeNote, 200)

	function removeNote() {
		while (list[i] != noteValue) {
			i++;
		}
		list.splice(i, 1);
		generateList(list);
	}

}

//Changes List Order Then Calls On Animation Then Generation
function moveNote(elmnt, direction) {
	var note = elmnt.parentElement.parentElement;
	var noteValue = note.firstChild.innerHTML;
	var i = 0
	while (list[i] != noteValue) {
		i++;
	}
	var saveSpot1 = list[i];
	var saveSpot2;
	if (direction == true) {
		if (i > 0) {
			saveSpot2 = list[i - 1]
			list.splice((i - 1), 2, saveSpot1, saveSpot2)
		}
	} else {
		if (i != list.length - 1) {
			saveSpot2 = list[i + 1];
			list.splice((i), 2, saveSpot2, saveSpot1)
		}
	}
	var y = 0;
	swapAnimation();


	//Spawns The Animation Then Generates List
	function swapAnimation() {
		//Changes Which Element Is Being Used Depending On Direction Chosen
		if (direction == true) {
			var partner = note.previousElementSibling;
		} else {
			var partner = note.nextElementSibling;
		}
		//Checks That You Arent Moving The Top Element Up Or Bottom Element Down.
		if (direction == true && i > 0 || direction == false && i != list.length - 1) {
			note.classList.add("faded");
			partner.classList.add("faded");

			if (y == 0) {
				y++;
				window.setTimeout(swapAnimation, 150);
			} else if (y == 1) {
				y++;
				note.firstChild.innerHTML = partner.firstChild.innerHTML;
				partner.firstChild.innerHTML = noteValue;
				window.setTimeout(swapAnimation, 150);
			} else {
				y = 0;
				generateList(list)
			}
		}
	}
}

//Generates The List Using The Array Info
function generateList(arry) {
	notebox.innerHTML = "";
	saveNew();
	for (i = 0; i < arry.length; i++) {
		if (list[i] != "" && list[i] != undefined) {
			notebox.innerHTML += "<div class='note'><p>" + arry[i] + "</p><div class='delete' title='Delete' onclick='deleteNote(this);'><img src='pics/trash%20can.png' class='trashpic'></div><div class='movediv'><div class='up tinybutton' title='Move Up' onclick='moveNote(this, true);'><img src='pics/up%20arrow.png' class='arrowpic'></div><div class='down tinybutton' title='Move Down' onclick='moveNote(this, false);'><img src='pics/down%20arrow.png' class='arrowpic'></div></div></div>"
		}
	}
}


//Listens for Keypresses
document.addEventListener("keypress", function (event) {
	keypress(event.keyCode)
});

//Checks That Key Pressed Is Enter Then If Textbox is Selected Then Creates A Note
function keypress(pressedKey) {
	if (pressedKey == 13 && document.activeElement.nodeName == "INPUT") {
		createNote();
	}
}
