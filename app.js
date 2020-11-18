// ROUTINE CONSTRUCTOR
function Routine(no, task, category, time) {
    this.no = no;
    this.task = task;
    this.category = category;
    this.time = time;
    // this.time = time2;
}

// UI CONSTRUCTOR

function UI() {}

// Add Routine to list
UI.prototype.addRoutineToList = function(routine) {
    const list = document.getElementById('task-list');

    // create a row
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = 
    `<td>${routine.no}</td>
    <td>${routine.task}</td>
    <td>${routine.category}</td>
    <td>${routine.time}</td>
    <td><a href="#" class="delete">X</a></td>`

    list.appendChild(row);
}

// CLEAR FIELDS
UI.prototype.clearFields = function(e) {
        document.getElementById('no').value = '';
        document.getElementById('task').value =  '';
        document.getElementById('category').value = '';
        document.getElementById('time').value = '';
        // document.getElementById('time2').value = '';
}

// Add Event Listener
document.getElementById('routine-form').addEventListener('submit', function(e) {

    const no = document.getElementById('no').value,
        task = document.getElementById('task').value,
        category = document.getElementById('category').value,
        timefrom = document.getElementById('time').value;
        // timeto = document.getElementById('time2').value;
    
        // instantiate a new Routine
        const routine = new Routine(no, task, category, time);
 
        // Instantiate a new UI
        const ui = new UI()

        // Add Routine to list 
        ui.addRoutineToList(routine);

        // clear Fields
        ui.clearFields();

        e.preventDefault();
})

