////// Création des vaccins

// Fonction générique pour la vaccination basée sur une condition
function vaccinate(person, mutationsToCheck, vaccinateFn) {
    if (mutationsToCheck.some((mutation) => person.mutations.includes(mutation))) {
        vaccinateFn(person);
    }
    person.descendants.forEach((descendant) => vaccinate(descendant, mutationsToCheck, vaccinateFn));
}

// Fonctions pour chaque vaccin
function vaccineA1(person) {
    if (!person.isDeceased) {
        vaccinate(person, ['Zombie-A', 'Zombie-32'], (person) => {
            if (person.age <= 30) {
                console.log(`${person.name} (${person.age} years old) has been vaccinated and is immune to all mutations.`);
                person.mutations = [];
                person.isImmune = true;
            } else {
                console.log(`${person.name} (${person.age} years old) is too old; the vaccine is ineffective.`);
            }
        });
    }
}

function vaccineB1(person) {
    let i = 0;
    if (!person.isDeceased) {
        vaccinate(person, ['Zombie-B', 'Zombie-C'], (person) => {
            if (i % 2 === 0) {
                console.log(`${person.name} has been vaccinated and is no longer infected with Zombie-B and/or Zombie-C.`);
                person.mutations = person.mutations.filter((mutation) => !['Zombie-B', 'Zombie-C'].includes(mutation));
            } else {
                console.log(`${person.name} has been killed by the vaccine. Sorry!`);
                person.isDeceased = true;
            }
            i++;
        });
    }
}

function ultimateVaccine(person) {
    if (!person.isDeceased) {
        vaccinate(person, ['Zombie-Ultimate'], (person) => {
            console.log(`${person.name} has been vaccinated and can never be infected or infect others again.`);
            person.mutations = [];
            person.isImmune = true;
            person.canInfect = false;
        });
    }

}


module.exports = { vaccinate, vaccineA1, vaccineB1, ultimateVaccine };
