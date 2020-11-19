class Routine {
    constructor(no, routine, category, time1, time2){
        this.no = no;
        this.routine = routine;
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
        <td>${routine.routine}</td>
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
    document.getElementById('routine').value =  '';
    document.getElementById('category').value = '';
    document.getElementById('time1').value = '';
    document.getElementById('time2').value = '';
    }
    
}

// Add Event Listener for add routine
const formRoutine = document.getElementById('routine-form');
formRoutine.addEventListener('submit', function(e) {

    const no = document.getElementById('no').value,
        routine = document.getElementById('routine').value,
        category = document.getElementById('category').value,
        time1 = document.getElementById('time1').value,
        time2 = document.getElementById('time2').value;
    
        // instantiate a new Routine
        const outline = new Routine(no, routine, category, time1, time2);
 
        // Instantiate a new UI
        const ui = new UI()

        if (no === ''|| routine === '' || category === '' || time1 === '' || time2 === '' ) {
            ui.showAlert('Please fill in all fields', 'error') 
        } else {
            // Add Routine to list
        ui.addRoutineToList(outline);

            // Add Book successfully
        ui.showAlert('Routine Added!', 'success')

        // clear Fields
        ui.clearFields();

        }

    
        e.preventDefault();
})


// Event Listener for Delete Book
const listRoutine = document.getElementById('routine-list');
listRoutine.addEventListener('click', function(e){
    // instantiate the ui
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);
    // show Alert
    ui.showAlert('Routine Removed!', 'success');

    e.preventDefault();
});