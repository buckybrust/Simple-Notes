loadArray();


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

        console.log(newSave)
        console.log(list)
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
        list = localStorage.getItem("HBNoteApp").split("+");
        generateList(list);
    }
}

