// Classes

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
}

// Everything related to HTML
class HTML {

    // Inserts the budget when the user submits it
    insertBudget(amount) {
        // Insert into HTML
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;

    }

    // Displays a message (correct or invalid)
    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        // Insert into HTML
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

        // Clear the error
        setTimeout(function(){
            document.querySelector('.primary .alert').remove();
            addExpenseForm.reset();
        }, 3000);
    }
}

// Variables
const addExpenseForm = document.querySelector('#add-expense'),
        budgetTotal = document.querySelector('span#total'),
        budgetLeft = document.querySelector('span#left');

let budget, userBudget;

// Instantiate the HTML Class
const html = new HTML();

// Event Listeners
eventListeners();

function eventListeners() {

    // App Init
    document.addEventListener('DOMContentLoaded', function(){
        // Ask the visitor their weekly budget
        userBudget = prompt(' What\'s your budget for this week? ');
        // validate the userBudget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {
            // Budget is valid then instanciate the budget class
            budget = new Budget(userBudget);
            
            // Instanciate HTML Class
            html.insertBudget(budget.budget);

        }
    });

    // When a new expense is added
    addExpenseForm.addEventListener('submit', function(e){
        // Read the input values
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount === '') {
            html.printMessage('There was an error, all the fields are mandatory', 'alert-danger');
        } else {

        }
    });
}