import * as courses from './courses.js'

export default class LearningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }

    addCourse(newCourse) {
        this.courses.push(newCourse);
    }
}

export const webDevelopment = new LearningPaths({
    name: "Desarrollo Web",
    courses: [
        courses.gitAndGithubCourse,
        courses.designCourseForDevelopers,
        courses.htmlAndCssPracticalCourse,
    ]
});