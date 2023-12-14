console.log(departments);

// Opdracht 1
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers.")
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description + ".")
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medwerkers.")
console.log("Sales is een uitdagende afdeling om te werken als verkoopmanager. " + departments.sales.description) // Fout!

// Opdracht 2
const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

switch(userInput) {
    case 'marketing':
    case 'sales':
    case 'customer-service':
        console.log("Je koos " + userInput + ". " + departments[userInput].description)
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.")
}

// Opdracht 3
