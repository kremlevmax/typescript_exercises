"use strict";
class User {
    constructor(name) {
        if (typeof name === "string") {
            this.name = name;
        }
    }
}
const user = new User("John");
console.log(user.name);
