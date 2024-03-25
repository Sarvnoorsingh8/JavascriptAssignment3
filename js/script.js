// To dynamically add student info
function addStudentInfo() {
    const studentInfo = document.getElementById('studentInfo');
    const studentId = '200552807';
    const studentName = 'Sarvnoor Singh';
    studentInfo.textContent = `Student ID: ${studentId}, Name: ${studentName}`;
}

//  To handle pizza ordering
function orderPizza() {
    // Retrieve form values
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const toppings = [...document.querySelectorAll('input[name="toppings"]:checked')].map(topping => topping.value);

    // Create Pizza object
    const pizza = new Pizza(size, crust, toppings);

    // Display pizza details
    displayPizza(pizza);
}

// Pizza class
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    // Method to describe the pizza
    describe() {
        return `Size: ${this.size}, Crust: ${this.crust}, Toppings: ${this.toppings.join(', ')}`;
    }
}

// To display pizza details
function displayPizza(pizza) {
    const pizzaDetails = document.createElement('p');
    pizzaDetails.textContent = `Your Pizza: ${pizza.describe()}`;

    const form = document.getElementById('pizzaForm');
    form.insertAdjacentElement('afterend', pizzaDetails);
}

// To add student info when the page loads
window.onload = addStudentInfo;
