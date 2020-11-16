// ROUTINE CONSTRUCTOR
function Routine(no, task, category, time) {
    this.no = no
    this.task = task;
    this.category = category;
    this.time = time;
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
    <td>${this.time}</td>
    <td><a></td>`

    lsit
}

// Add Event Listener
document.getElementById('routine-form').addEventListener('submit', function(e) {

    const no = document.getElementById('no').value,
        task = document.getElementById('task').value,
        category = document.getElementById('category').value,
        time = document.getElementById('time').value;
    
        // instantiate a new Routine
        const routine = new Routine(no, task, category, time)

        // Instantiate a new UI
        const ui = new UI()

        // Add Routine to list 
        ui.addRoutineToList(routine);


        e.preventDefault();
})