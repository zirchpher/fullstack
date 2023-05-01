function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    }

    else if (subjectIsObject) {
        copySubject = {};
    }

    else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        }
        else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            }
            else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}


const obj1 = {
    ala: "a",
    buala: "b",
    castor: {
        comida: "croquetas",
        color: "marrón",
    },
    comer() {
        console.log(`El castor come sus ${this.castor.comida}`);
    }
};

const obj2 = deepCopy(obj1);

console.log({
    obj1,
    obj2,
});