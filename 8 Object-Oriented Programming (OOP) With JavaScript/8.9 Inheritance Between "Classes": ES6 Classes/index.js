"use strict";

class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(" ")) {
            this._fullName = name;
        } else {
            console.log(`${name} is not a full name!`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log(`Hey there!`);
        console.log(this);
    }
}

class Student extends Person {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    // 重写方法
    calcAge() {
        console.log(
            `I'm ${
                2024 - this.birthYear
            } years old, but as a student I fell more like ${
                2024 - this.birthYear + 10
            }`
        );
    }
}

const martha = new Student("Martha Jones", 2012, "Computer Science");
martha.introduce(); // My name is Martha Jones and I study Computer Scienc
martha.calcAge(); // I'm 12 years old, but as a student Ifell more like 22

console.log(martha instanceof Student); // true
console.log(martha instanceof Person); // true
console.log(martha instanceof Object); // true

console.log(martha.__proto__); // Person {}
console.log(martha.__proto__.__proto__); // {}

console.log(Student.prototype.constructor); // [class Student extends Person]
