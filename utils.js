const { performInfection } = require('./Infection');
const { vaccineA1, vaccineB1, ultimateVaccine } = require('./Vaccine');


//// Ajout de l'ancêtre pour chaque personne de l'arbre (sauf la racine, null par défaut)
function addAncestors(person, ancestor = null) {
    person.ancestor = ancestor;
    person.descendants.forEach((descendant) => addAncestors(descendant, person));
    return person;
}


function simulateZombieApocalypse(zombieOutbreak) {
    console.log(`Pandemic starts !!!`);
    zombieOutbreak = addAncestors(zombieOutbreak);
    performInfection(zombieOutbreak);
    console.log('');

    console.log('A1 Vaccine');
    vaccineA1(zombieOutbreak);
    console.log('');

    console.log('B1 Vaccine');
    vaccineB1(zombieOutbreak);
    console.log('');

    console.log('Ultimate Vaccine');
    ultimateVaccine(zombieOutbreak);
    console.log('');

    console.log('The infection has been contained. We are all safe now!');
    console.log('');

    console.log('Survivors:');
    displaySurvivors(zombieOutbreak);
}

// Fonction pour afficher les survivants
function displaySurvivors(person) {
    if (!person.isDeceased) {
        console.log(`${person.name} (Age: ${person.age}${person.mutations.length > 0 ? `, Mutations: ${person.mutations.join(', ')}` : ''}) is still alive.`);
    }

    person.descendants.forEach((descendant) => displaySurvivors(descendant));
}

module.exports = { addAncestors, simulateZombieApocalypse, displaySurvivors }