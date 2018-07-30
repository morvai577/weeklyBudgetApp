// Classes

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
}

// Variables
const addExpenseForm = document.querySelector('#add-expense');

let budget, userBudget;

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
            console.log(budget);
        }
    });

    // When a new expense is added
    addExpenseForm.addEventListener('submit', function(e){
        e.preventDefault();
    });
}