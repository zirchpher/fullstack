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
        readName() {
            return private["_name"];
        },
        changeName(newName) {
            private["_name"] = newName;
        },
    };

    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false,
    });

    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false,
    });

    return public;
}

const remix = createStudent({
    name: "Remix",
    email: "remmian@gmail.com",
    age: 18,
    instagram: "remmian",
});

console.log(remix);