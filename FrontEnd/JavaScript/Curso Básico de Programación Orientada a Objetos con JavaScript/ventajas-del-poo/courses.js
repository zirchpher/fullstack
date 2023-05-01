export default class Courses {
    constructor({
        name,
        teacher = undefined,
    }) { 
        this.name = name;
        this.teacher = teacher;
    }
}

export const gitAndGithubCourse = new Courses({
    name: "Curso Profesional de Git y GitHub",
    teacher: "Freddy Vega"
});

export const htmlAndCssPracticalCourse = new Courses({
    name: "Curso práctico de HTML y CSS",
    teacher: "Diego de Granda"
});

export const designCourseForDevelopers = new Courses({
    name: "Curso de Diseño para Developers",
    teacher: "Samanta Martínez"
});