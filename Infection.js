////// INFECTION 
/// Variant A: infectTopToBottom
function infectTopToBottom(person, mutation, conditionFn) {
    if (canBeInfected(person, mutation, conditionFn)) {
        person.mutations.push(mutation);
        console.log(`${person.name} has been infected with ${mutation}`);
    }
    person.descendants.forEach((descendant) => infectTopToBottom(descendant, mutation, conditionFn));
}


/// Variant B: infectBottomToTop
function infectBottomToTop(person, mutation, conditionFn) {
    if (canBeInfected(person, mutation, conditionFn)) {
        person.mutations.push(mutation);
        console.log(`${person.name} has been infected with ${mutation}`);
    }

    if (person.ancestor) {
        infectBottomToTop(person.ancestor, mutation, conditionFn);
    }
}

/// Variant C: infectOneInTwoPeople
function infectOneInTwoPeople(person, mutation) {
    if (person.ancestor) {
        const isEven = person.ancestor.descendants.indexOf(person) % 2 === 0 ? 0 : 1;
        person.ancestor.descendants.forEach((descendant, index) => {
            if (canBeInfected(descendant, mutation, () => index % 2 === isEven)) {
                descendant.mutations.push(mutation);
                console.log(`${descendant.name} has been infected with ${mutation}`);
            }
        });
    }
}

/// Vérification qu'une personne peut etre infectée selon la condition donnée en paramètre
function canBeInfected(person, mutation, conditionFn = () => true) {
    return person.canInfect === true && person.isImmune === false && person.isDeceased === false &&
        person.mutations.includes(mutation) === false && conditionFn(person);
}

function performInfection(person) {
    person.mutations.forEach((mutation) => {
        switch (mutation) {
            case 'Zombie-A':
                infectTopToBottom(person, 'Zombie-A');
                break;
            case 'Zombie-B':
                infectBottomToTop(person, 'Zombie-B');
                break;
            case 'Zombie-32':
                infectTopToBottom(person, 'Zombie-32', (person) => person.age >= 32);
                infectBottomToTop(person, 'Zombie-32', (person) => person.age >= 32);
                break;
            case 'Zombie-C':
                infectOneInTwoPeople(person, 'Zombie-C');
                break;
            case 'Zombie-Ultimate':
                infectBottomToTop(person, 'Zombie-Ultimate', (person) => person.ancestor === null);
                break;
        }
    });

    person.descendants.forEach((descendant) => performInfection(descendant));
}

module.exports = { infectTopToBottom, infectBottomToTop, infectOneInTwoPeople, performInfection };