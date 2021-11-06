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
    // method with ternary notation
    registerStudentTernary(studentToRegister) {
        const checkStudents = this.students.filter(student => student.email === studentToRegister.email);
        (checkStudents.length === 0) ? (
            this.students.push(studentToRegister),
            console.log(`Registering ${studentToRegister.name} to the ${this.name} Bootcamp.`),
            this.students) 
            : (console.log(`${studentToRegister.name} is already registered for the ${this.name} Bootcamp.`))
    }
    
    // method using filter with if/else statement
    registerStudentIfElse(studentToRegister) {
        const checkStudents = this.students.filter(student => student.email === studentToRegister.email);
        if (checkStudents.length === 0) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.name} to the ${this.name} Bootcamp.`);
            return this.students;
        }
        else {console.log(`${studentToRegister.name} is already registered for the ${this.name} Bootcamp.`)}
    }

    // method using includes with if/else
    registerStudentIncludes(studentToRegister) {
        if (this.students.includes(studentToRegister)) {
            console.log(`${studentToRegister.name} is already registered for the ${this.name} Bootcamp.`)
        }
        else {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.name} to the ${this.name} Bootcamp.`);
            return this.students;
        }
    }
}

        


        



