class User {
  name: string;
  age: number;

  constructor(name: string);

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("John");
console.log(user.name);
