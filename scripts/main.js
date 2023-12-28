console.log(departments);

// Opdracht 1
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers.")
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description + ".")
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers.")
console.log("Sales is een uitdagende afdeling om te werken als verkoopmanager. " + departments.sales.jobs[1].description)

// Opdracht 2
const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

switch(userInput) {
    case 'marketing':
    case 'sales':
    case 'customer-service':
        console.log("Je koos " + userInput + ". " + departments[userInput].description);
        break;
    default:
        // console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");3
        document.getElementById('error-message').textContent = `Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`;
}

// Opdracht 3

// const userInputMarketing = prompt(`
// Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n
// 0: ${departments.marketing.jobs[0].title},
// 1: ${departments.marketing.jobs[1].title},
// 2: ${departments.marketing.jobs[2].title},
// 3: ${departments.marketing.jobs[3].title}
// `)

// switch(userInputMarketing) {
//     case '0':
//     case '1':
//     case '2':
//     case '3':
//         console.log(`Je koos ${departments.marketing.jobs[userInputMarketing].title}. Een uitdagende rol! ${departments.marketing.jobs[userInputMarketing].description}`);
//         break;
//     default:
//         console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.")
// }

// Opdracht 4

console.log(`${userInput} is een leuke afdeling om te werken. Er werken op dit moment ${departments[userInput].numberOfEmployees} medewerkers.`)

// const userInputNew = prompt(`
// Je koos ${userInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n
// 0: ${departments[userInput].jobs[0].title},
// 1: ${departments[userInput].jobs[1].title},
// 2: ${departments[userInput].jobs[2].title},
// 3: ${departments[userInput].jobs[3].title}
// `)

// switch(userInputNew) {
//     case '0':
//     case '1':
//     case '2':
//     case '3':
//         console.log(`Je koos ${departments[userInput].jobs[userInputNew].title}. Een uitdagende rol! ${departments[userInput].jobs[userInputNew].description}`);
//         break;
//     default:
//         console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.")
// }

// Opdracht 5

// document.getElementById('role-title').textContent = 'Marjolein';
// document.getElementById('department-description').textContent = 'Chocolade';

const userInputNew = prompt(`
Je koos ${userInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n
0: ${departments[userInput].jobs[0].title},
1: ${departments[userInput].jobs[1].title},
2: ${departments[userInput].jobs[2].title},
3: ${departments[userInput].jobs[3].title}
`)

switch(userInputNew) {
    case '0':
    case '1':
    case '2':
    case '3':
        document.getElementById('role-title').textContent = departments[userInput].jobs[userInputNew].title;
        document.getElementById('department-description').textContent = departments[userInput].description;
        document.getElementById('role-description').textContent = departments[userInput].jobs[userInputNew].description;
        break;
    default:
        document.getElementById('error-message').textContent = `Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`;
}