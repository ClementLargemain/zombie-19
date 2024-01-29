// main.js
const Person = require('./Person');
const { simulateZombieApocalypse } = require('./Utils');

let zombieOutbreak = new Person(
    "Clément",
    false,
    true,
    false,
    31,
    ["Zombie-A"],
    [
        new Person(
            "Corentin",
            false,
            true,
            false,
            73,
            [],
            [
                new Person(
                    "Romain",
                    false,
                    true,
                    false,
                    23,
                    [],
                    [
                        new Person(
                            "Christopher",
                            false,
                            true,
                            false,
                            42,
                            ["Zombie-B"],
                            []
                        )
                    ]
                ),
                new Person("Killian", false, true, false, 12, [], [])
            ]
        ),
        new Person(
            "Alexis",
            false,
            true,
            false,
            46,
            [],
            [
                new Person("Jean", false, true, false, 12, [], []),
                new Person("Yohan", false, true, false, 4, ["Zombie-32"], []),
                new Person(
                    "William",
                    false,
                    true,
                    false,
                    50,
                    [],
                    [
                        new Person(
                            "Thomas",
                            false,
                            true,
                            false,
                            22,
                            ["Zombie-Ultimate"],
                            []
                        )
                    ]
                )
            ]
        ),
        new Person("Peyo", false, true, false, 41, [], []),
        new Person("Coby", false, true, false, 17, ["Zombie-C"], [])
    ]
);

simulateZombieApocalypse(zombieOutbreak);
