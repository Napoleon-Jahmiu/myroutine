// ROUTINE CONSTRUCTOR
function Routine(no, task, category, timefrom, timeto) {
    this.no = no
    this.task = task;
    this.category = category;
    this.time = timefrom;
    this.time = timeto;
}

// UI CONSTRUCTOR

function UI() {}

// Add Routine to list
UI.prototype.addRoutineToList = function() {
    const list = document.getElementById('task-list');

    // create a row
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = 
    `<td>${this.no}</td>
    <td>${this.task}</td>
    <td>${this.category}</td
    <td>${this.timefrom}</td>
    <td>${this.timeto}</td>
    <td><a></td>`

    list.appendChild(row);
}

// CLEAR FIELDS
UI.prototype.clearFields() = function(e) {
        document.getElementById('no').value = '';
        document.getElementById('task').value =  '';
        document.getElementById('category').value = '';
        document.getElementById('timefrom').value = '';
        document.getElementById('timeto').value = '';
}

// Add Event Listener
document.getElementById('routine-form').addEventListener('submit', function(e) {

    const no = document.getElementById('no').value,
        task = document.getElementById('task').value,
        category = document.getElementById('category').value,
        timefrom = document.getElementById('timefrom').value,
        timeto = document.getElementById('timeto').value;
    
        // instantiate a new Routine
        const routine = new Routine(no, task, category, timefrom, timeto)
 
        // Instantiate a new UI
        const ui = new UI()

        // Add Routine to list 
        ui.addRoutineToList(routine);

        // clear Fields
        ui.clearFields();





        e.preventDefault();

        console.log(routine);
})

