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
    return {
        name,
        email,
        age,
        socialMedia: {
            twitter,
            instagram,
            github,
        },
        approvedCourses,
        learningPaths,
    };
}

const remix = createStudent({
    name: "Remix",
    email: "remmian@gmail.com",
    age: 18,
    instagram: "remmian",
});