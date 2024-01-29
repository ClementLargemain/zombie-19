// Person.js
class Person {
    constructor(name, isImmune, canInfect, isDeceased, age, mutations, descendants) {
        this.name = name;
        this.isImmune = isImmune;
        this.canInfect = canInfect;
        this.isDeceased = isDeceased;
        this.age = age;
        this.mutations = mutations;
        this.descendants = descendants;
    }
}

module.exports = Person;
