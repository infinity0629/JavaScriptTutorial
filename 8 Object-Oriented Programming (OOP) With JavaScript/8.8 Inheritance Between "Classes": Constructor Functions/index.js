"use strict";

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

/**
 * Student 构造函数
 */
const Student = function (firstName, birthYear, course) {
    /**
     * 构造函数使用 call 重用属性
     */

    // Person 有 firstName birthYear 属性可以重用
    // this.firstName = firstName;
    // this.birthYear = birthYear;

    // 没有使用 new 调用构造方法 Person，因而 this 是 undefined
    // Person(firstName, birthYear); // TypeError: Cannot set properties of undefined (setting 'firstName')

    // 使用 call 方法，已经初始化的 this 传递到构造函数中 this.firstName this.birthYear 赋值
    Person.call(this, firstName, birthYear);

    this.course = course;
};

/**
 * 对象构建时，除了构建了和 Person 构造函数中的属性，还有自己的属性 this.course。
 *
 * Person 原型中的属性并没有继承过来。所以无法直接使用 Person 原型中的 calcAge 方法。
 */

// 虽然可以直接将 Student.prototype 设置为 Person.prototype，这样偏离了涉及初衷，Student.prototype 没和 Person.prototype 分离。
// Student.prototype = Person.prototype;

// 因而需要使用 Object.create 方法将 Person 原型创建一个新的原型后赋值给 Student 原型
Student.prototype = Object.create(Person.prototype);

// 这里给 Student.prototype 设置属性、方法时候得注意：务必保证先初始化好 Student.prototype 在赋值，不能反过来。
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2002, "Couputer Science");
console.log(mike);
// Student {
//   firstName: 'Mike',
//   birthYear: 2002,
//   course: 'Couputer Science'
// }
mike.introduce(); // My name is Mike and I study Couputer Science
mike.calcAge(); // 22

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

/**
 * 因为使用了 Object.create 方法将 Person 原型创建一个新的原型后赋值给 Student 原型，所以会显示对象 mike 的原型不是 Student 而是 Person。
 */
console.log(mike.__proto__); // Person { introduce: [Function (anonymous)] }
console.log(mike.__proto__.__proto__); // { calcAge: [Function (anonymous)] }

// 构造方法也不对，需要重新设置为 Student。
console.log(Student.prototype.constructor); // [Function: Person]
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor); // [Function: Student]
