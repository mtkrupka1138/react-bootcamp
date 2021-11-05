class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        let checkStudents = this.students.filter(student => student.email === studentToRegister.email)
        if (checkStudents.length === 0) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.name} to the Web Development Bootcamp.`);
            return this.students;
        }
        else {console.log(`${studentToRegister.name} is already registered for this bootcamp!`)}
    }
}


