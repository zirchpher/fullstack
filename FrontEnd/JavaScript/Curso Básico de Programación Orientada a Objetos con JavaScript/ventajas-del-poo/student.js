import * as learningPaths from "./learning-paths.js";
import Comment from './comments.js';

export default class Student {
    constructor({
        name,
        username,
        points,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
    }) {
        this._name = name;
        this.username = username;
        this.email = email;
        this.points = points;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = [
            learningPaths.webDevelopment,
        ];
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

export class StudentFree extends Student {
    constructor(args) {
        super(args);
    }
}

export class StudentBasic extends Student {
    constructor(args) {
        super(args);
    }
}

export class StudentExpert extends Student {
    constructor(args) {
        super(args);
    }
}

export class StudentTeacher extends Student {
    constructor(args) {
        super(args);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor",
        });
        comment.publicar();
    }
}