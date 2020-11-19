class Routine {
    constructor(no, task , category, time1, time2){
        this.no = no;
        this.task = task;
        this.category = category;
        this.time1 = time1;
        this.time2 = time2;
    }
}

class UI {
    // Add Routine To list
    addRoutineToList(routine) {
        const list = document.getElementById('routine-list');

        // create a row
        const row = document.createElement('tr');
        // insert cols
        row.innerHTML = 
        `<td>${routine.no}</td>
        <td>${routine.task}</td>
        <td>${routine.category}</td>
        <td>${routine.time1}</td>
        <td>${routine.time2}</td>
        <td><a href="#" class="delete">X</a></td>`
    
        list.appendChild(row);
    }

    // ShowAlert
    showAlert(message, className){
        // create the div element
    const div = document.createElement('div');

    // Add Classes
    div.className = `alert ${className}`;

    // Create the message in the div (Add text)
    div.appendChild(document.createTextNode(message));

    // Get the parent Element where the div will appear
    const container = document.querySelector('.container');
    // Get the form Element where the div will be placed before 
    const routineForm = document.querySelector('#routine-form');
    // Insert the div before the routine form in the container
    container.insertBefore(div, routineForm);

    // Timeout
    setTimeout(function() {
        document.querySelector('.alert').remove()
    }, 3000)

    }

    // Delete Routine
    deleteRoutine(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }


    // Clear Fields
    clearFields() {
    document.getElementById('no').value = '';
    document.getElementById('task').value =  '';
    document.getElementById('category').value = '';
    document.getElementById('time1').value = '';
    document.getElementById('time2').value = '';
    }
    
}

// Store (Persist) To Local Storage

class Store {

    // get Routine from Local Storage
    static getRoutines() {
        let routines;
        if(localStorage.getItem('routines') === null) {
            routines = [];
        } else {
            routines = JSON.parse(localStorage.getItem('routines'));
        }

        return routines;
    }

    // Display Routines after the browser is being Loaded
    static displayRoutines() {
        const routines = Store.getRoutines();

        routines.forEach(function(routine){
            // instantiate the ui
            const ui = new UI;

            ui.addRoutineToList(routine);
        });

    }

    // Add Routine to Local Storage 
    static addRoutine(routine) {
        const routines = Store.getRoutines();

        routines.push(routine);

        localStorage.setItem('routines', JSON.stringify(routines));
    }

    // Remove Routine completely from the local Storage when deleted and even after reloads
    static removeRoutine(task) {
        const routines = Store.getRoutines();
        // Loop through using the for each loop
        routines.forEach(function(routine, index) {
            if(routine.task === task) {
                // Splice Out
                routines.splice(index, 1);
            }
        });

        localStorage.setItem('routines', JSON.stringify(routines));
    }
}

// Load DOM COntent
document.addEventListener('DOMContentLoaded', Store.displayRoutines)
// Add Event Listener for add routine
const formRoutine = document.getElementById('routine-form');
formRoutine.addEventListener('submit', function(e) {

    const no = document.getElementById('no').value,
        task = document.getElementById('task').value,
        category = document.getElementById('category').value,
        time1 = document.getElementById('time1').value,
        time2 = document.getElementById('time2').value;
    
        // instantiate a new Routine
        const routine = new Routine(no, task, category, time1, time2);
 
        // Instantiate a new UI
        const ui = new UI()

        if (no === ''|| task === '' || category === '' || time1 === '' || time2 === '' ) {
            ui.showAlert('Please fill in all fields', 'error') 
        } else {
            // Add Routine to list
        ui.addRoutineToList(routine);

        Store.addRoutine(routine);

            // Add Book successfully
        ui.showAlert('Routine Added!', 'success')

        // clear Fields
        ui.clearFields();

        }

    
        e.preventDefault();
});



// Event Listener for Delete Book
const listRoutine = document.getElementById('routine-list');
listRoutine.addEventListener('click', function(e){
    // instantiate the ui
    const ui = new UI();

    // Delete Book
    ui.deleteRoutine(e.target);

    // Delete Routine from Local Storage
    Store.removeRoutine(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

    // show Alert
    ui.showAlert('Routine Removed!', 'success');

    e.preventDefault();
});

