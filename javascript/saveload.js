var attributeList = [];

//Saves The New Array To Local Storage
function saveNew() {
    //Tests Browser Storage Support
    if (typeof (Storage) !== "undefined") {
        var newSave = '';
        //Creates all new Local Storage
        for (i = 0; i < list.length; i++) {
            newSave += list[i] + "+"

        }
        if (newSave.includes("++")) {
            newSave = newSave.slice(0, -2);
        } else {
            newSave = newSave.slice(0, -1)
        }
		
		newSave += "|"
		
		for (x = 0; x < attributeList.length; x++) {
            newSave += attributeList[x] + "+"

        }
        if (newSave.includes("++")) {
            newSave = newSave.slice(0, -2);
        } else {
            newSave = newSave.slice(0, -1)
        }

        console.log(newSave)
        console.log(list)
		console.log(attributeList)
        localStorage.setItem("HBNoteApp", newSave)
    } else {
        alert("You Don't Have Web Storage Support. Try A More Up To Date Browser.")
    }
}

//Loads The Saved Array At The Start Of The Program and Calls on Generation
function loadArray() {
    var i = 0;
    list = [];

    //Tests Browser Storage Support
    if (typeof (Storage) !== "undefined") {
		var allList = localStorage.getItem("HBNoteApp").split("|")
        list = allList[0].split("+");
		if(allList[1] != undefined){
			attributeList = allList[1].split("+");
		}
        generateList(list);
    }
}

