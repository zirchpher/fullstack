function requireParameters(parameter) {
    throw new Error(`Falta asignar el ${parameter}`);
}

function createStudent({
    name = requireParameters("name"),
    email = requireParameters("email"),
    age,
    twitter,
    instagram,
    github,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
    };
    const public = {
        email,
        age,
        socialMedia: {
            twitter,
            instagram,
            github,
        },
        approvedCourses,
        learningPaths,

        get name() {
            return private._name;
        },

        set name(newName) {
            if (newName.length !== 0) {
                private._name = newName;
            }
            else {
                console.warn("El nombre debe tener al menos 1 caracter");
            }
        },
    };

    return public;
}

const remix = createStudent({
    name: "Remix",
    email: "remmian@gmail.com",
    age: 18,
    instagram: "remmian",
});

console.log(remix);